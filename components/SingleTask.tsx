import { BiFlag } from "react-icons/bi";
import { BsFlag, BsFlagFill } from "react-icons/bs";

export default function Task() {
	return (
		<div className="w-full ring-1 ring-red text-mbl rounded-md p-2">
			<div className="flex justify-between py-2">
				<div>
					<p className="text-sm font-semibold">Cook Delicious meal.</p>
				</div>
				<div>
					<BsFlagFill className="text-red" />
				</div>
			</div>
			<div className="px-4">
				<p className="text-xs">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
					quam minus, ipsa quasi, voluptates aliquam ad voluptatem fugiat
					reprehenderit ullam eaque dicta consectetur. At maxime ex dolorum,
					delectus harum quas!
				</p>
			</div>
			<div className="flex justify-between">
				<div>
					<p className="text-xs py-2 font-semibold">Due: November 24, 2025</p>
				</div>
				<div>
					<button className="p-2 mx-1 text-xs cursor-pointer hover:bg-mbl/80 bg-mbl text-white font-semibold rounded-md">
						Done
					</button>
					<button className="p-2 mx-1 text-xs cursor-pointer hover:bg-golden/80 bg-golden text-white font-semibold rounded-md">
						Edit
					</button>
					<button className="p-2 mx-1 text-xs cursor-pointer hover:bg-red/80 bg-red text-white font-semibold rounded-md">
						Delete
					</button>
				</div>
			</div>
		</div>
	);
}
