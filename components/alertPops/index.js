import React from 'react'

import {Alert} from "@heroui/alert";


const AlertTemplate = ({ message, options, style, close }) => {
	const alertType = options.type ? "info" : 'primary' ? 'error' : 'danger' ? 'success' : 'success';
	
	return (
		
		
	<div className='  ' style={{ ...style }}>
		
			{
				(typeof message === 'string' || message instanceof String) 
				? <Alert title={message} color={"primary"}/>
				: Array.isArray(message) && typeof message[0] === 'string' && typeof message[1] === 'string'
				?
				<Alert title={message[0]} description={message[1]}/>
				: message.toString()
			}
			
		
	</div>
	)
}

export default AlertTemplate
