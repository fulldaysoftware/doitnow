import Image from "next/image";
import Link from "next/link";
import { PiArrowElbowDownRight, PiArrowRight } from "react-icons/pi";
export default function UserAppWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='w-full h-screen flex justify-between px-24 py-4 bg-[url("/bg4.jpg")] bg-cover'>
			<div className="h-full flex flex-col justify-between pb-24">
				<div className="w-full">
					<Image alt="Logo" width={100} height={100} src={"/logodoitnow.png"} />
				</div>
				<div className="bg-gray-200/60 backdrop-blur-lg p-4 rounded-md">
					<p className="text-6xl text-black/70 p-2 font-medium">
						Get it Done. <span className="text-golden/50">Simply</span>.
					</p>
					<p className="p-2">
						The only task manager built to help you finish what you start.
					</p>
					<div className="p-2">
						<Link href="/createaccount">
							<button className="flex items-center ring-1 px-4 cursor-pointer rounded-md">
								<p className="p-2">Join us now.</p>{" "}
								<PiArrowRight className="text-md animate-slide" />
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div className="w-[35%] h-[80%] my-auto px-4">
				<div className="bg-gray-300/70 backdrop-blur-md rounded-md ring-1 ring-gray-500/70 shadow-2xl p-4">
					{children}
				</div>
			</div>
		</div>
	);
}
