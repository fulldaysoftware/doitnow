import Calendar from "@/components/Calender";
import Image from "next/image";
import Link from "next/link";
import { LuListTodo } from "react-icons/lu";

export default function App({ children }: { children: React.ReactNode }) {
	return (
		<div className="w-full p-1 grid grid-cols-[2fr_12fr] gap-2 h-screen">
			<div className="bg-gray-200 ">
				<div className="flex justify-center p-4">
					<Image src={"/logodoitnow.png"} height={100} width={100} alt="logo" />
				</div>
				<div className="px-4 py-6">
					<Link href="/home" className="text-md">
						All Tasks
					</Link>
					<Link href="/home" className="text-md">
						<p>Today</p>
					</Link>
					<Link href="/home" className="text-md">
						<p>Profile</p>
					</Link>
				</div>

				<div className="px-4 py-6">
					<button className="p-2 font-semibold hover:cursor-pointer bg-mbl text-white rounded-md w-full text-center">
						Create Task
					</button>
				</div>
			</div>
			<div>{children}</div>
		</div>
	);
}
