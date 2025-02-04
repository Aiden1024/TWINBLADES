import React from 'react'

import {Alert} from "@heroui/alert";


function typeCovert (type) {
	if (type === 'info') return 'primary'
	if (type === 'error') return 'danger'
	if (type === 'success') return 'success'
	return 'primary'
	
}
const AlertTemplate = ({ message, options, style, close }) => {
	const alertType = options.type 
	
	return (
		
		
	<div className=' min-w-[300px] max-w-[90vw]' style={{ ...style }}>
		
			{
				(typeof message === 'string' || message instanceof String) 
				? <Alert variant='faded' title={message} color={typeCovert(alertType)} onClose={close} />
				: Array.isArray(message) && typeof message[0] === 'string' && typeof message[1] === 'string'
				?
				<Alert variant='faded' title={message[0]} color={typeCovert(alertType)} description={message[1]} onClose={close}/>
				: message.toString()
			}
			
		
	</div>
	)
}

export default AlertTemplate
