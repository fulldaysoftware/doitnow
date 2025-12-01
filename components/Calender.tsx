"use client";

import { generator } from "@/lib/calendar";
import { BiArrowBack, BiArrowToLeft, BiArrowToRight } from "react-icons/bi";

export default function Calendar() {
	const calendarInfo = generator("november", 2025);
	return (
		<div className="p-2 ring-mbl ring-1 rounded-md">
			<div className="w-full grid grid-cols-[1fr_3fr_1fr]">
				<div className="flex items-center justify-start">
					<BiArrowToLeft className="cursor-pointer" onClick={() => {}} />
				</div>
				<div className="flex items-center  justify-center">
					{calendarInfo.month}, {calendarInfo.year}
				</div>
				<div className="flex items-center  justify-end">
					<BiArrowToRight className="cursor-pointer" onClick={() => {}} />
				</div>
			</div>
			<div className="p-2">
				<table>
					<thead>
						<tr>
							<td className="text-xs border-b-2 border-mbl px-2">Sun</td>
							<td className="text-xs border-b-2 border-mbl px-2">Mon</td>
							<td className="text-xs border-b-2 border-mbl px-2">Tue</td>
							<td className="text-xs border-b-2 border-mbl px-2">Wed</td>
							<td className="text-xs border-b-2 border-mbl px-2">Thu</td>
							<td className="text-xs border-b-2 border-mbl px-2">Fri</td>
							<td className="text-xs border-b-2 border-mbl px-2">Sat</td>
						</tr>
					</thead>
					<tbody>
						{calendarInfo.days.map((it, ind) => {
							return (
								<tr key={ind}>
									{it.map((mn, ind) => {
										return (
											<td
												key={ind}
												className={`${
													mn.t && "font-bold"
												}  text-center text-xs p-2`}
											>
												{mn.c}
											</td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
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
