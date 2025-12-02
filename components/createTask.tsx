"use client";
import { useAppContext } from "@/context/appcontext";
import { CgClose } from "react-icons/cg";

export default function CreateTaskDialog() {
	const context = useAppContext();
	const { isCreateTaskOpen, setIsCreateTaskOpen } = context;
	console.log(isCreateTaskOpen);
	return (
		<dialog
			className={`${
				isCreateTaskOpen ? "block" : "hidden"
			}  fixed w-full h-screen bg-transparent backdrop:bg-transparent flex justify-center p-4 z-100`}
		>
			<div className="w-[60%] h-[40%] p-4 shadow-2xl bg-white/80 backdrop-blur-sm ring-1 ring-golden rounded-md">
				<div className="flex justify-between">
					<div>
						<h1>Create Task</h1>
					</div>
					<div>
						<button
							onClick={() => {
								setIsCreateTaskOpen((prv) => {
									return false;
								});
							}}
						>
							<CgClose className="text-md text-mbl cursor-pointer" />
						</button>
					</div>
				</div>
				<p>Greetings, one and all!</p>
				<form method="dialog">
					<button>OK</button>
				</form>
			</div>
		</dialog>
	);
}
