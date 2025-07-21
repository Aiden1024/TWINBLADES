import React from 'react';
import LangComponent from '@/components/langSwitcher';
import { Button, Code, Snippet } from '@heroui/react';
import { useState, useContext } from 'react';
import { Input } from '@heroui/react';
import { DataContext } from '@/components/providerContext';

const ProviderDemo = () => {
	const { currUser, setCurrUser } = useContext(DataContext);

	// 将代码片段定义为字符串
	const providerCodeString = `
<DataContext.Provider value={{ currUser, setCurrUser }}>
  {children}
</DataContext.Provider>
  `.trim();

	return (
		<>
			<h2 className="text-header">Data Provider Achieve Cross Page Data Sharing</h2>
			<h2 className="text-subheader">User Name: {currUser}</h2>

			{/* 使用字符串而非 JSX */}
			<Snippet symbol="" className="w-full">
				{providerCodeString}
			</Snippet>

			<Code className="w-fit">/components/providerContext.tsx</Code>
		</>
	);
};

export default ProviderDemo;