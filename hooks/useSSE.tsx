import { useEffect, useState } from 'react';
import { NativeEventSource, EventSourcePolyfill } from 'event-source-polyfill';
import { useAlert } from 'react-alert';
import { getSessionToken, getServerIP } from './useFetchHook';

const useSSE = (url: string | null, serverJSONKey = 'IP_1', version = '/v4') => {
  const [data, setData] = useState(null);
  const [serverIP, setServerIP] = useState('');
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [error, setError] = useState(null);
  const alert = useAlert();
  const fullSSEUrl = serverIP + version + url;

  // 第一个 useEffect 只负责获取 serverIP
  useEffect(() => {
    const fetchServerIP = async () => {
      try {
        const ip = await getServerIP(serverJSONKey);
        setServerIP(ip);
      } catch (error) {
        setError(error);
      } finally {
        setInitialLoading(false);
      }
    };

    fetchServerIP();
  }, [serverJSONKey]); // 只依赖 serverJSONKey

  // 第二个 useEffect 负责处理 SSE 连接
  useEffect(() => {
    let eventSource: EventSourcePolyfill | null = null;

    if (serverIP && url) {
      
      console.log('Connecting SSE to:', fullSSEUrl);
      
      setLoading(true);
      eventSource = new EventSourcePolyfill(fullSSEUrl, {
        headers: {
          "X-Session-Token": getSessionToken()
        },
        reconnectionTime: 5000
      });

      eventSource.onmessage = (event) => {
        if (!event?.data) { 
          console.error('No data in SSE event:', event);
          return;
        }
        try {
          const parsedData = JSON.parse(event.data);
          setData(parsedData);
          setLoading(false);
        } catch (error) {
          console.error('Error parsing SSE data:', error);
          alert.error(['Error parsing SSE data', error?.message || 'Error parsing SSE data']);
          setError(error);
          setLoading(false);
        }
      };

      eventSource.onerror = (error) => {
        console.error('SSE error:', error);
        // alert.error(['SSE error', error?.message || 'SSE connection error']);
        setError(error?.message);
        setLoading(false);
      };
    }

    // 清理函数
    return () => {
      if (eventSource) {
        console.log('Closing SSE connection');
        eventSource.close();
      }
    };
  }, [fullSSEUrl]); // 只在这些值变化时重新连接

  return { data, loading, initialLoading, error };
};

export default useSSE;
