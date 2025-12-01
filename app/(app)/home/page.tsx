import Calendar from "@/components/Calender";
import Task from "@/components/SingleTask";
import TaskAggregator from "@/components/Tasks";

export default function Home() {

	return (
		<div>
			<div className="grid grid-cols-[3fr_1fr] gap-2">
				<div>
					<h1 className="text-xl font-semibold">All Tasks</h1>
					<TaskAggregator />
				</div>
				<div className="sticky p-2">
					<Calendar />
				</div>
			</div>
		</div>
	);
}
