import { BiArrowBack, BiArrowToLeft, BiArrowToRight } from "react-icons/bi";

export default function Calendar() {
	return (
		<div className="p-2 ring-mbl ring-1 rounded-md">
			<div className="w-full grid grid-cols-[1fr_3fr_1fr]">
				<div className="flex items-center justify-start">
					<BiArrowToLeft />
				</div>
				<div className="flex items-center  justify-center">February, 2025</div>
				<div className="flex items-center  justify-end">
					<BiArrowToRight />
				</div>
			</div>
			<div className="p-2">
				<table>
					<thead>
						<tr>
							<td className="text-sm border-b-2 border-mbl px-2">Sun</td>
							<td className="text-sm border-b-2 border-mbl px-2">Sun</td>
							<td className="text-sm border-b-2 border-mbl px-2">Sun</td>
							<td className="text-sm border-b-2 border-mbl px-2">Sun</td>
							<td className="text-sm border-b-2 border-mbl px-2">Sun</td>
							<td className="text-sm border-b-2 border-mbl px-2">Sun</td>
							<td className="text-sm border-b-2 border-mbl px-2">Sun</td>
						</tr>
					</thead>
					<tbody></tbody>
				</table>
				{/* <div className="flex">
					<button className="p-1 hover:cursor-pointer text-sm bg-mbl text-white rounded-md text-center">
						Today
					</button>
				</div> */}
			</div>
		</div>
	);
}
