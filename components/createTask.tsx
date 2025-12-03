"use client";
import { useAppContext } from "@/context/appcontext";
import {
	ChangeEvent,
	ChangeEventHandler,
	FormEvent,
	TextareaHTMLAttributes,
	useState,
} from "react";
import { CgClose } from "react-icons/cg";
import { FcTodoList } from "react-icons/fc";
import { GrDocumentTime } from "react-icons/gr";
import { MdOutlinePriorityHigh } from "react-icons/md";
import { SiDatev } from "react-icons/si";

type taskType = {
	task: string;
	note: string;
	duedate: string;
	priority: string;
};

export default function CreateTaskDialog() {
	const context = useAppContext();
	const { isCreateTaskOpen, setIsCreateTaskOpen } = context;
	const [taskfield, setTaskField] = useState<taskType>({
		task: "",
		duedate: "",
		note: "",
		priority: "",
	});
	return (
		<dialog
			className={`${
				isCreateTaskOpen ? "block" : "hidden"
			}  fixed w-full h-screen bg-transparent backdrop:bg-transparent flex justify-center p-4 z-100`}
		>
			<div className="w-[60%] h-[50%] p-4 shadow-2xl bg-white/80 backdrop-blur-sm ring-1 ring-golden rounded-md">
				<div className="flex justify-between">
					<div>
						<h1 className="text-lg font-semibold">🤔 What are you planning?</h1>
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
				<div className="w-full grid grid-cols-[3fr_4fr]">
					<div>
						<div className="p-1 w-full">
							<p className="w-full inline-flex items-center">
								<FcTodoList className="text-mbl text-lg" />
								<label className="px-2 text-md">What is the Task?</label>
							</p>
							<input
								className="w-full focus:outline-none ring-1 ring-mbl/50 rounded-md text-sm p-2"
								type="text"
							/>
							<p className="text-xs text-center p-1 text-red">eror message</p>
						</div>
						<div className="p-1 w-full">
							<p className="w-full inline-flex items-center">
								<MdOutlinePriorityHigh className="text-mbl text-lg" />
								<label className="px-2 text-md">Express the Priority?</label>
							</p>
							<select className="w-full focus:outline-none ring-1 ring-mbl/50 rounded-md text-sm p-2">
								<option>Neutral</option>
								<option>Normal</option>
								<option>Medium</option>
								<option>Urgent</option>
							</select>
							{/* <input
								className="w-full focus:outline-none ring-1 ring-mbl/50 rounded-md text-sm p-2"
								type="text"
							/> */}
							<p className="text-xs text-center p-1 text-red">eror message</p>
						</div>
						<div className="p-1 w-full">
							<p className="w-full inline-flex items-center">
								<GrDocumentTime className="text-mbl text-lg" />
								<label className="px-2 text-md">Due Date</label>
							</p>
							<input
								className="w-full focus:outline-none ring-1 ring-mbl/50 rounded-md text-sm p-2"
								type="date"
							/>
							<p className="text-xs text-center p-1 text-red">eror message</p>
						</div>
					</div>
					<div>
						<div className="p-1 w-full h-[80%]">
							<p className="w-full inline-flex items-center">
								<FcTodoList className="text-mbl text-lg" />
								<label className="px-2 text-md">Any Notes?</label>
							</p>
							<textarea
								value={taskfield.note}
								onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
									setTaskField((prv) => {
										return { ...prv, note: e.target.value };
									});
								}}
								rows={6}
								maxLength={450}
								className="w-full resize-none focus:outline-none ring-1 ring-mbl/50 rounded-md text-sm p-2"
							></textarea>
							<p className="text-xs">
								max: {500 - taskfield.note.length} chars
							</p>
						</div>
						<div className="p-1 w-full flex justify-end">
							<button className="p-2 mx-2 text-sm font-semibold hover:cursor-pointer bg-golden text-white rounded-md text-center">
								Clear
							</button>
							<button className="p-2 text-sm font-semibold hover:cursor-pointer bg-mbl text-white rounded-md text-center">
								Add Task
							</button>
						</div>
					</div>
				</div>
			</div>
		</dialog>
	);
}
