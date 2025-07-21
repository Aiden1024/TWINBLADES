import React from 'react'
import useFetch from '@/hooks/useFetchHook'
import { Button, Code } from '@heroui/react'
import { PATH_LOGIN, PATH_USERS } from '@/APIs/home'


const successLoginBody = {
	"email": "eve.holt@reqres.in",
	"password": "cityslicka"
}

const errorLoginBody = {
	"email": "eve.holt@reqres.in",
}
const FetchHookDemo = () => {

	const { error: logInError, loading: logInLoading, fetchData: logInFetchData } = useFetch()
	const { error: gerUserError, loading: gerUserLoading, fetchData: gerUserFetchData } = useFetch()
	async function handleLogIn(body = {}) {
		const res = await logInFetchData({
			url: PATH_LOGIN,
			method: 'POST',
			type: "JSON",
			body: body,
			errorMsgTitle: 'Login Failed',
			successMsgTitle: "Login Success",
			useSessionToken: false,

		});


	}


	async function handleUserData() {
		const res = await gerUserFetchData({
			url: PATH_LOGIN,
			method: 'GET',
			type: "JSON",
			params: { "delay": 6 },
			errorMsgTitle: 'Get User Data Failed',
			successMsgTitle: "Get User Data Success",
			useSessionToken: false
		});


	}
	return (
		<>
			<h2 className="text-header">React useFetch Hook</h2>
			<h2 className=" text-subheader">
				REST API Handling with Alert & Dynamic IPs (Powered by https://reqres.in)
			</h2>

			<div className=' flex items-center gap-2'>
				<Button onPress={() => handleLogIn(successLoginBody)} isDisabled={logInLoading} color='success'>Login Success</Button>
				<Button onPress={() => handleLogIn(errorLoginBody)} isDisabled={logInLoading} color='danger'>Login Error</Button>
				<Button onPress={handleUserData} isLoading={gerUserLoading} color='default'>Delay Response</Button>

			</div>
			<h2>Error: {logInError || gerUserError}</h2>

			<Code className=" w-fit">/hooks/useFetchHook.tsx</Code>
			<Code className=" w-fit">/public/server.json</Code>
		</>
	)
}

export default FetchHookDemo
