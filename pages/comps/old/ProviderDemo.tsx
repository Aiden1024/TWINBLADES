import React from 'react'
import LangComponent from '@/components/langSwitcher';
import { Button, Code } from '@heroui/react';
import { useState, useContext } from 'react';
import { Input } from '@heroui/react';

import { DataContext } from '@/components/providerContext';

const ProviderDemo = () => {
	
	const { currUser, setCurrUser } = useContext(DataContext);

	return (
		<>
			<h2 className="text-header">Data Provider Achieve Cross Page Data Sharing </h2>
			<h2 className=" text-subheader">
				User Name: {currUser}
			</h2>

			
			
			<Input value={currUser} onValueChange={setCurrUser} size='md' className=' max-w-xs' />

		
			<Code className=" w-fit">/components/providerContext.tsx</Code>
		</>
	)
}

export default ProviderDemo
