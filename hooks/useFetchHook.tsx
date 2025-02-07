import { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import Router from 'next/router';

// Define the interface for the FetchDataProps
interface FetchDataProps {
  url: string; // Required URL for the fetch request
  method: string; // Required HTTP method for the fetch request
  body?: any; // Optional request body
  type?: 'JSON' | 'FORM_DATA'; // Optional request body type (JSON or FORM_DATA)
  params?: { [key: string]: string | number }; // Optional query parameters
  successMsgTitle?: string | null; // Optional success message title
  successMsgContent?: string | null; // Optional success message content
  errorMsgTitle?: string; // Optional error message title
  errorMsgContent?: string; // Optional error message content
  backendUrl?: string | null; // Optional backend URL
  serverJSONKey?: string; // Optional key for fetching server IP from server.json
  useSessionToken?: boolean; // Optional flag to use session token in the request
}

const sessionTokenKey = process.env.NEXT_PUBLIC_TOKEN_KEY
// Get the session token from the local storage
const getSessionToken = () => {
  if (typeof window !== 'undefined') {
	return window.localStorage.getItem(sessionTokenKey);
  }
  return null;
};

// Fetch the server IP from the server.json file
const getServerIP = async (key: string = 'slpIP') => {
  try {
	const response = await fetch(process.env.NEXT_PUBLIC_BASE_PATH || '' + '/server.json');
	const data = await response.json();
	console.log('data', data[key]);
	return data[key];
  } catch (error) {
	console.error('Error fetching slpIP:', error);
	return window.location.hostname;
  }
};

// Custom hook for fetching data
const useFetch = () => {
  const alert = useAlert(); // Use the react-alert library for displaying alerts
  const [error, setError] = useState(null); // State for storing errors
  const [loading, setLoading] = useState(false); // State for tracking loading status
  const [initialLoading, setInitialLoading] = useState(true); // State for tracking initial loading status
  
  const handleTimeout = () => {
	alert.info('Bad Internet Connection');
  };
  const sessionToken = getSessionToken(); // Get the session token

  // Fetch data function
  const fetchData = async (props: FetchDataProps) => {
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
	} = props;
	setLoading(true); // Set loading state to true
	setError(null); // Reset error state

	try {
	  let serverIP = backendUrl;

	  // If backendUrl is not provided, fetch it from server.json
	  if (!serverIP) {
		serverIP = await getServerIP(serverJSONKey);
	  }

	  // Construct the URL with query parameters
	  const urlParams = new URLSearchParams(
		Object.entries(params).reduce(
		  (acc, [key, value]) => ({
			...acc,
			[key]: value.toString(),
		  }),
		  {}
		)
	  ).toString();
	  const fullUrl = `${serverIP}${url}${urlParams ? `?${urlParams}` : ''}`;

	  let requestBody;
	  let headers = {};

	  // Set request body and headers based on the request type
	  if (type === 'JSON') {
		requestBody = body ? JSON.stringify(body) : null;
		headers = {
		  'Content-Type': 'application/json',
		};
	  } else if (type === 'FORM_DATA') {
		requestBody = body;
	  }

	  // Add session token to the request headers if available and useSessionToken is true
	  if (useSessionToken && sessionToken) {
		headers = {
			...headers, // Spread existing headers
			'X-Session-Token': sessionToken, // Add the session token header
		  };
	  } else if (useSessionToken && !sessionToken) {
		console.error('NO TOKEN');
		Router.push('/auth'); // Redirect to the authentication page if no token is available
		return;
	  }

	  
	  const timeoutId = setTimeout(handleTimeout, 5000);
	  // Make the fetch request
	  const response = await fetch(fullUrl, {
		method,
		headers,
		body: requestBody,
	  });
	  
	  clearTimeout(timeoutId);

	  console.log('response', response);
	  const data = await response.json();
	  // Handle different response scenarios
	  if (response.status === 401) {
		alert.info('Session TIME OUT');
		localStorage.removeItem(sessionTokenKey); // Remove the session token from local storage
		Router.push('/auth'); // Redirect to the authentication page
	  } else if (!response.ok) {
		console.error(`HTTP error ${response.status}`);
		setError(data?.error); // Set the error state
		alert.error([
		  errorMsgTitle,
		  errorMsgContent ? errorMsgContent :  data?.error ? data.error :  `HTTP Error ${response.statusText}`,
		]);
	  } else {
		// Display success message if provided
		if (successMsgTitle ) {
			if ( successMsgContent) {
				alert.success([successMsgTitle, successMsgContent]);
			} else {
				alert.success(successMsgTitle);
			}
		  
		} 
	  }


	// //   if (data && data.message) {
	// // 	alert.error(data.message); // Display error message from the response
	// //   }
	// 	  if (data && data.error) {
	// 	alert.error(data.error); // Display error message from the response
	//   }

	  return data;
	} catch (error) {
	  console.error('Error fetching data:', error);
	  setError(error?.message); // Set the error state
	  alert.error(error?.message); // Display error to the user
	} finally {
	  setLoading(false); // Set loading state to false
	  setInitialLoading(false); // Set initial loading state to false
	}
  };

  // Return the error, loading, fetchData, and initialLoading states/functions
  return { error, loading, fetchData, initialLoading };
};

export default useFetch;
