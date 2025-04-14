import { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import Router from 'next/router';
import { useRef } from 'react';
import { useRouter } from 'next/router';

interface FetchDataProps {
  url: string;
  method: string;
  body?: any;
  type?: 'JSON' | 'FORM_DATA';
  params?: { [key: string]: string | number };
  successMsgTitle?: string | null;
  successMsgContent?: string | null;
  errorMsgTitle?: string;
  errorMsgContent?: string | null;
  backendUrl?: string | null;
  serverJSONKey?: string;
  useSessionToken?: boolean;
  version?: string;
  override401?: boolean;
  override403?: boolean;
  overrideTimeout?: null | number;
  disableErrorMsg?: boolean;
}

const sessionTokenKey = process.env.NEXT_PUBLIC_TOKEN_KEY;

export const getSessionToken = () => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(sessionTokenKey);
  }
  return null;
};
export const getServerIP = async (key: string = 'slpIP') => {
  try {
    const response = await fetch(Router.basePath + '/server.json');
    const data = await response.json();
    console.log('data', data[key]);
    
    // 如果是空字符串，需要根据不同情况返回不同的格式
    if (data[key] === "") {
      if (key === "IP_2") {
        // 添加协议前缀
        return `http://${window.location.hostname}:5012/v4/static`;
      }
      // 添加协议前缀
      return `http://${window.location.hostname}:5012`;
    }
    return data[key];

  } catch (error) {
    console.error('Error fetching slpIP:', error);
    if (key === "IP_2") {
      return `http://${window.location.hostname}:5012/v4/static`;
    }
    return `http://${window.location.hostname}:5012`;
  }
};

const useFetch = () => {
  const alert = useAlert();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const router = useRouter();
  const abortControllerRef = useRef<AbortController | null>(null);

  const cancelFetch = () => {
    try {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort("Request Cancelled");
            abortControllerRef.current = null;
            setLoading(false); // 在取消请求时也重置 loading 状态
        }
    } catch (error) {
        console.warn('Error cancelling fetch:', error);
    }
};

  const fetchData = async (props: FetchDataProps) => {
    cancelFetch();

    const controller = new AbortController();
    abortControllerRef.current = controller;
    const signal = controller.signal;

    const {
      url,
      method,
      body = null,
      type = 'JSON',
      params = {},
      successMsgTitle = null,
      successMsgContent = null,
      errorMsgTitle = 'OoF',
      errorMsgContent = null,
      backendUrl = null,
      serverJSONKey = 'IP_1',
      useSessionToken = true,
      version = '/v4',
      override401 = false,
      override403 = false,
      overrideTimeout = null,
      disableErrorMsg = false
    } = props;

    setLoading(true);
    setError(null);

    try {
      if (!url) {
        throw new Error('URL is required');
      }

      let serverIP = backendUrl;
      if (!serverIP) {
        try {
          serverIP = await getServerIP(serverJSONKey);
          if (!serverIP) throw new Error('Failed to get server IP');
        } catch (err) {
          console.error('Server IP error:', err);
          if (!disableErrorMsg) {
            alert.error('Failed to connect to server');
          }
          return null;
        }
      }

      // 更安全的版本
      const urlParams = params
        ? new URLSearchParams(
          Object.entries(params)
            .filter(([_, value]) => value != null)  // 过滤掉 null 和 undefined
            .reduce(
              (acc, [key, value]) => ({
                ...acc,
                [key]: String(value)  // 使用 String() 更安全
              }),
              {}
            )
        ).toString()
        : '';

      const fullUrl = `${serverIP}${version}${url}${urlParams ? `?${urlParams}` : ''}`;

      let requestBody;
      let headers: Record<string, string> = {};

      if (type === 'JSON') {
        requestBody = body ? JSON.stringify(body) : null;
        headers = {
          'Content-Type': 'application/json',
        };
      } else if (type === 'FORM_DATA') {
        requestBody = body;
      }

      const sessionToken = getSessionToken();
      if (useSessionToken && sessionToken) {
        headers = {
          ...headers,
          'X-Session-Token': sessionToken,
        };
      } else if (useSessionToken && !sessionToken) {
        console.error('NO TOKEN');
        router.push('/auth');
        return null;
      }

      let timeoutId: NodeJS.Timeout | null = null;

      // 设置超时提醒
      const timeoutMsecond = overrideTimeout ? overrideTimeout : Number(process.env.NEXT_PUBLIC_FETCH_INFO_TIMEOUT) || 5000;
      timeoutId = setTimeout(() => {
        // 只在请求还在进行且组件未卸载时显示提醒
        if (!signal.aborted) {
          alert.info('Bad Internet Connection');
        }
      }, timeoutMsecond);

      const response = await fetch(fullUrl, {
        method,
        headers,
        body: requestBody,
        signal,
      });

      // 请求完成后清除超时提醒
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // 如果请求被取消，直接返回
      if (signal.aborted) {
        return null;
      }

      if (!response) {
        if (!disableErrorMsg) {
          alert.error('No response received');
        }
        return null;
      }

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        console.error('JSON parsing error:', jsonError);
        if (!disableErrorMsg) {
          console.error('Invalid response format');
        }
        return null;
      }

      if (!override401 && response.status === 401) {
        if (!disableErrorMsg) {
          alert.info('Session TIME OUT');
        }
        localStorage.removeItem(sessionTokenKey);
        Router.push('/auth');
        return null;
      }

      if (!override403 && response.status === 403) {
        if (!disableErrorMsg) {
          alert.info('Permission Denied');
        }
        Router.push('/');
        return null;
      }

      if (!response.ok) {
        console.error(`HTTP error ${data?.message}`);
        setError(data?.message);
        if (!disableErrorMsg) {
          alert.error([
            errorMsgTitle,
            errorMsgContent ? errorMsgContent : data?.message ? data.message : `HTTP Error ${response.statusText}`,
          ]);
        }
        return data;
      }

      if (successMsgTitle && !disableErrorMsg) {
        if (successMsgContent) {
          alert.success([successMsgTitle, successMsgContent]);
        } else {
          alert.success(successMsgTitle);
        }
      }

      return data;

    } catch (error) {
      // 如果请求被取消，静默返回
      if (error.name === 'AbortError' || signal.aborted) {
        console.log('Request cancelled');
        return null;
      }

      console.error('Fetch error:', error);

      if (!navigator.onLine) {
        if (!disableErrorMsg) {
          alert.error('No internet connection');
        }
      } else if (!disableErrorMsg && !signal.aborted) {  // 只在非取消状态下显示错误
        alert.error([
          errorMsgTitle,
          errorMsgContent || error?.message || 'An error occurred'
        ]);
      }

      setError(error?.message || 'An error occurred');
      return null;

    } finally {
      if (!signal.aborted) {  // 只在非取消状态下更新状态
        setLoading(false);
        setInitialLoading(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      cancelFetch();
      setError(null);
      setLoading(false);
      setInitialLoading(false);
    };
  }, []);

  return { error, loading, fetchData, initialLoading, cancelFetch };
};

export default useFetch;
