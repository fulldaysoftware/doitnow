import Link from "next/link";
import { BiLock } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
import { MdOutlineAccountBox } from "react-icons/md";

export default function UserLoginPage() {
	return (
		<div>
			<h1 className="text-xl">Welcome Back!</h1>
			<p className="text-sm">Please provide your credntials to login.</p>
			<div className="p-1">
				<div>
					<label>
						<p className="py-2">Email:</p>
					</label>
					<div className="flex ring-1 p-1 rounded-md items-center">
						<MdOutlineAccountBox className="text-3xl" />
						<input
							type="email"
							autoComplete="false"
							className="w-full text-sm bg-transparent p-1 autofill:bg-none focus:outline-none"
							name="email"
						/>
					</div>
					<p className="text-xs py-1 text-end px-4 text-red">error message</p>
				</div>
				<div>
					<label>
						<p className="py-2">Password:</p>
					</label>
					<div className="flex ring-1 p-1 rounded-md items-center">
						<BiLock className="text-3xl" />
						<input
							type="password"
							autoComplete="false"
							className="w-full text-sm bg-transparent p-2 autofill:bg-none focus:outline-none"
							name="email"
						/>
						<BsEyeFill className="cursor-pointer text-3xl pr-2" />
					</div>
					<p className="text-xs py-1 text-end px-4 text-red">error message</p>
				</div>
			</div>
			<button className="mb-2 p-2 text-sm font-semibold hover:cursor-pointer bg-mbl text-white rounded-md w-full text-center">
				Login
			</button>
			<Link className="my-1 p-2" href="/createaccount">
				Dont have Account? Create Here.
			</Link>
		</div>
	);
}
