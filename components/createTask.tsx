"use client";
import { useAppContext } from "@/context/appcontext";

export default function CreateTask() {
	const context = useAppContext();
	const { isCreateTaskOpen } = context;
	return (
		<dialog open={isCreateTaskOpen}>
			<p>Greetings, one and all!</p>
			<form method="dialog">
				<button>OK</button>
			</form>
		</dialog>
	);
}
