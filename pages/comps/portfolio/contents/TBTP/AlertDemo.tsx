import { Button, Code } from "@heroui/react";
import { useAlert } from "react-alert";

import React from 'react'

const AlertDemo = () => {

	const alert = useAlert()
	return (
		<>
			<h2 className="text-header">Pop Alert Ability</h2>
			<h2 className=" text-subheader">
				Press the Button to Trigger Pop Alert
			</h2>
			<div className=" grid grid-cols-3 gap-2 w-fit">
				<Button
					color="secondary"
					variant="flat"
					onPress={() => {
						alert.info("This is a Info Alert");
					}}
				>
					Info Alert
				</Button>
				<Button
					color="success"
					variant="flat"
					onPress={() => {
						alert.success("This is a Success Alert");
					}}
				>
					Success Alert
				</Button>
				<Button
					color="danger"
					variant="flat"
					onPress={() => {
						alert.error("This is a Error Alert");
					}}
				>
					Error Alert
				</Button>

				<Button
					color="secondary"
					onPress={() => {
						alert.info(["Info Title", "This is a Info Alert Description"]);
					}}
				>
					Info Title
				</Button>
				<Button
					color="success"
					onPress={() => {
						alert.success([
							"Success Title",
							"This is a Success Alert Description",
						]);
					}}
				>
					Success Title
				</Button>
				<Button
					color="danger"
					onPress={() => {
						alert.error(["Error Title", "This is a Error Alert Description"]);
					}}
				>
					Error Title
				</Button>
			</div>
			<Code className=" w-fit mt-2">/components/alertPops/index.js </Code>
		</>
	)
}

export default AlertDemo
