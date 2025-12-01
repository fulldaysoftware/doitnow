"use client";

import { useAppContext } from "@/context/appcontext";
import { useRouter } from "next/navigation";

export default function CreateTask() {
	const context = useAppContext();
	const { setIsCreateTaskOpen } = context;
	return (
		<div className="px-4 py-6">
			<button
				onClick={() => {
					 setIsCreateTaskOpen((prv) => {
						return !prv;
					});
				}}
				className="p-2 text-sm font-semibold hover:cursor-pointer bg-mbl text-white rounded-md w-full text-center"
			>
				Create Task
			</button>
		</div>
	);
}
