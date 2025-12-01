import Calendar from "@/components/Calender";
import Image from "next/image";
import Link from "next/link";
import { CgCalendarDue, CgProfile } from "react-icons/cg";
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

				<div className="px-4 py-6">
					<button className="p-2 text-sm font-semibold hover:cursor-pointer bg-mbl text-white rounded-md w-full text-center">
						Create Task
					</button>
				</div>
			</div>
			<div className="overflow-y-auto">
				<div className="p-2">
					<h1 className="font-semibold py-1 text-3xl text-mbl">
						👋 Hi, Developer.
					</h1>
					<hr className="text-golden pt-4" />
				</div>
				<div className="p-2">{children}</div>
			</div>
		</div>
	);
}
