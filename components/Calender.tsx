"use client";

import { generator } from "@/lib/calendar";
import { useState } from "react";
import { BiArrowBack, BiArrowToLeft, BiArrowToRight } from "react-icons/bi";

export default function Calendar() {
	const today = new Date();
	const todayyear = today.getFullYear();
	const todaymonth = today.getMonth();
	const todaydate = today.getDate();
	const [calInfo, setCal] = useState(generator(todaymonth, todayyear));
	const [select, setSelect] = useState({ row: 0, row2: 0 });
	const [selectedDate, setSelectedDate] = useState<Date>(today);
	const forwardDate = () => {
		let next = calInfo.next.order;
		let newYear = calInfo.year;
		if (next === 0) {
			newYear = calInfo.year + 1;
			console.log("here", newYear);
		}
		setCal((prv) => {
			return generator(next, newYear);
		});
	};
	const previusDate = () => {
		let previous = calInfo.previous.order;
		let oldYear = calInfo.year;
		if (previous === 11) {
			oldYear = calInfo.year - 1;
		}
		setCal((prv) => {
			return generator(previous, oldYear);
		});
	};
	return (
		<div className="p-2 ring-mbl ring-1 rounded-md">
			<div className="w-full grid grid-cols-[1fr_3fr_1fr]">
				<div className="flex items-center justify-start">
					<BiArrowToLeft className="cursor-pointer" onClick={previusDate} />
				</div>
				<div className="flex items-center  justify-center">
					{calInfo.month}, {calInfo.year}
				</div>
				<div className="flex items-center  justify-end">
					<BiArrowToRight className="cursor-pointer" onClick={forwardDate} />
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
					<tbody className="pt-2">
						{calInfo.days.map((it, indx) => {
							return (
								<tr key={indx}>
									{it.map((mn, ind) => {
										return (
											<td
												onClick={() => {
													setSelect((prv) => {
														return { ...prv, row: indx, row2: ind };
													});
												}}
												key={ind}
												className={`${mn.t && "font-bold"} ${
													select.row == indx &&
													select.row2 == ind &&
													"bg-mbl text-white rounded-sm p-1"
												} text-center cursor-pointer text-xs p-2`}
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

				<div className="flex items-center justify-between w-full ring-1 ring-mbl rounded-md p-4">
					<button className="p-2 hover:cursor-pointer text-xs bg-mbl text-white rounded-md text-center">
						Today
					</button>
					<p>
						{todaydate}/{todaymonth + 1}/{todayyear}
					</p>
				</div>
			</div>
		</div>
	);
}
