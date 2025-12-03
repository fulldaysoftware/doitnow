import Calendar from "@/components/Calender";
import CreateTaskDialog from "@/components/createTask";
import CreateTask from "@/components/createTaskbtn";

import { AppContextProvider } from "@/context/appcontext";
import Image from "next/image";
import Link from "next/link";
import { BiLogOut, BiLogOutCircle } from "react-icons/bi";

import { CgCalendarDue, CgProfile } from "react-icons/cg";
import { LuListTodo } from "react-icons/lu";

export default function App({
	children,
	modal,
}: {
	children: React.ReactNode;
	modal: React.ReactNode;
}) {
	return (
		<>
			<AppContextProvider>
				<CreateTaskDialog />
				<div className={`w-full p-1 grid grid-cols-[2fr_12fr] gap-2 h-screen`}>
					<div className="bg-gray-200 ">
						<div className="flex justify-center p-4">
							<Image
								src={"/logodoitnow.png"}
								height={100}
								width={100}
								alt="logo"
							/>
						</div>
						<div className="px-4 py-6">
							<Link href="/home" className="text-md">
								<p className="text-md py-1 items-baseline">
									<LuListTodo
										fill="true"
										className="inline-flex text-xl text-mbl items-center"
									/>{" "}
									All Task
								</p>
							</Link>
							<Link href="/home" className="text-md">
								<p className="text-md py-1 items-baseline">
									<CgCalendarDue className="inline-flex text-xl text-mbl items-center" />{" "}
									Today
								</p>
							</Link>
							<Link href="/home" className="text-md">
								<p className="text-md py-1 items-baseline">
									<CgProfile className="inline-flex text-xl text-mbl items-center" />{" "}
									Profile
								</p>
							</Link>
						</div>
						<CreateTask />
					</div>
					<div className="overflow-y-auto">
						<div className="p-2">
							<div className="flex justify-between pr-4 items-center">
								<h1 className="font-semibold py-1 text-3xl text-mbl">
									👋 Hi, Developer.
								</h1>
								<Link href="/">
									<p className="text-sm font-bold text-mbl cursor-pointer">
										Sign out
									</p>
								</Link>
							</div>
							<hr className="text-golden pt-4" />
						</div>
						<div className="p-2">
							{children}
							{modal}
						</div>
					</div>
				</div>
			</AppContextProvider>
		</>
	);
}
