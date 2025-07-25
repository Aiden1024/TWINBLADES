import React from 'react'

import { Alert } from "@heroui/alert";


function typeCovert(type) {
	if (type === 'info') return 'secondary'
	if (type === 'error') return 'danger'
	if (type === 'success') return 'success'
	return 'secondary'

}
const AlertTemplate = ({ message, options, style, close }) => {
	const alertType = options.type

	return (


		<div className=' min-w-[300px] max-w-[90vw]' style={{ ...style }}>

			{
				(typeof message === 'string' || message instanceof String)
					? <Alert variant='faded' title={message} color={typeCovert(alertType)} onClose={close} />
					: Array.isArray(message) && message[0] && message[1]
						?
						<Alert variant='faded' title={message[0].toString()} color={typeCovert(alertType)} description={message[1].toString()} onClose={close} />
						: <Alert variant='faded' title={message.toString()} color={typeCovert(alertType)} onClose={close} />
			}


		</div>
	)
}

export default AlertTemplate
