import React from 'react'
import useFetch from '@/hooks/useFetchHook'
import { Button, Code } from '@heroui/react'
import { PATH_LOGIN } from '@/APIs/home'


const successLoginBody = {
	"email": "eve.holt@reqres.in",
	"password": "cityslicka"
}

const errorLoginBody = {
	"email": "eve.holt@reqres.in",
}
const FetchHookDemo = () => {
	
	const { error:logInError, loading:logInLoading, fetchData: logInFetchData } = useFetch()
	async function handleLogIn(body={}) {
		const res = await logInFetchData({
		  url: PATH_LOGIN,
		  method: 'POST',
		  type:"JSON",
		  body: body,
		  errorMsgTitle: 'Login Failed',
		  successMsgTitle:"Login Success",
		  useSessionToken:false
		});
	
	
	  }
  return (
	<>
			<h2 className="text-header">React useFetch Hook</h2>
			<h2 className=" text-subheader">
				REST API Handling with Alert & Dynamic IPs
			</h2>
			<div className=' flex items-center gap-2'>
				<Button onPress={() => handleLogIn(successLoginBody)} isLoading={logInLoading} color='success'>Login Success</Button>
				<Button onPress={() => handleLogIn({})} isLoading={logInLoading} color='danger'>Fetch Error</Button>
				<Button onPress={() => handleLogIn(errorLoginBody)} isLoading={logInLoading} color='danger'>400 Error</Button>
				
			</div>
			<h2>Error: {logInError}</h2>

			<Code className=" w-fit">/hooks/useFetchHook.tsx</Code>
			<Code className=" w-fit">/public/server.json</Code>
		</>
  )
}

export default FetchHookDemo
