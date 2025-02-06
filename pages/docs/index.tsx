import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { useContext } from "react";

import { DataContext } from '@/components/providerContext';


	
	
export default function DocsPage() {
	
	const { currUser, setCurrUser } = useContext(DataContext);
	
	return (

			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title()}>Docs</h1>
					<h2> User Name: {currUser}</h2>
				</div>
			</section>

	);
}
