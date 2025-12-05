"use client";
import UserAppWrapper from "@/components/UserAppWrapper";
import { SignUpSchema } from "@/lib/inputvalidation";
import axios from "axios";
import Link from "next/link";
import {
	ChangeEvent,
	FormEvent,
	SyntheticEvent,
	useActionState,
	useState,
} from "react";
import { BiLock } from "react-icons/bi";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { MdOutlineAccountBox, MdOutlineEmail } from "react-icons/md";
type UserDataType = {
	fullname: string;
	email: string;
	password: string;
	cpassword: string;
};

type error = {
	fname: { err: boolean; msg: string[] };
	email: { err: boolean; msg: string[] };
	password: { err: boolean; msg: string[] };
	cpasword: { err: boolean; msg: string[] };
};

export default function CreateUser() {
	const backurl = process.env.BACKURL ?? "http://localhost:3000";
	const [cpass, setCpass] = useState<boolean>(false);
	const [cpass2, setCpass2] = useState<boolean>(false);
	const [userInfo, setUserInfo] = useState<UserDataType>({
		fullname: "",
		cpassword: "",
		email: "",
		password: "",
	});

	const [error, setError] = useState<error>({
		fname: { err: false, msg: [] },
		email: { err: false, msg: [] },
		password: { err: false, msg: [] },
		cpasword: { err: false, msg: [] },
	});
	const handleUserCreation = async () => {
		let emptyErrObj: error = {
			fname: { err: false, msg: [] },
			email: { err: false, msg: [] },
			password: { err: false, msg: [] },
			cpasword: { err: false, msg: [] },
		};

		const val = await SignUpSchema.safeParse(userInfo);
		console.log(val.error?.issues[0].message);
		if (!val.success) {
			val.error.issues.map((iss) => {
				if (iss.path[0] === "fullName") {
					emptyErrObj.fname.err = true;
					emptyErrObj.fname.msg.push(iss.message);
				}
				if (iss.path[0] === "email") {
					emptyErrObj.email.err = true;
					emptyErrObj.email.msg.push(iss.message);
				}
				if (iss.path[0] === "password") {
					emptyErrObj.password.err = true;
					emptyErrObj.password.msg.push(iss.message);
				}
				if (iss.path[0] === "confirmPassword") {
					emptyErrObj.cpasword.err = true;
					emptyErrObj.cpasword.msg.push(iss.message);
				}
			});
			setError((prv) => {
				return { ...prv, ...emptyErrObj };
			});
		} else {
			const req = await axios.post(`${backurl}/api/v1/auth/createaccount`, {
				...userInfo,
			});
			console.log(req);
		}
	};

	return (
		<UserAppWrapper>
			<h1 className="text-xl">Welcome User!</h1>
			<p className="text-sm">Please provide your Information.</p>
			<p className="text-xs text-red text-center py-1">Error Message</p>
			<div className="p-1">
				<form action={handleUserCreation}>
					<div>
						<label>
							<p className="py-2">Full Name:</p>
						</label>
						<div className="flex ring-1 p-1 rounded-md items-center">
							<MdOutlineAccountBox className="text-3xl" />
							<input
								value={userInfo.fullname}
								onChange={(e: ChangeEvent<HTMLInputElement>) => {
									setUserInfo((prv) => {
										return { ...prv, fullname: e.target.value };
									});
								}}
								type="text"
								autoComplete="false"
								className="w-full text-sm bg-transparent p-1 autofill:bg-none focus:outline-none"
								name="fullname"
							/>
						</div>
						<p
							className={`${
								error.fname.err && "hidden"
							} text-xs py-1 text-end px-4 text-red`}
						>
							{error.fname.msg[0]}
						</p>
					</div>
					<div>
						<label>
							<p className="py-2">Email:</p>
						</label>
						<div className="flex ring-1 p-1 rounded-md items-center">
							<MdOutlineEmail className="text-3xl" />
							<input
								type="email"
								value={userInfo.email}
								onChange={(e: ChangeEvent<HTMLInputElement>) => {
									setUserInfo((prv) => {
										return { ...prv, email: e.target.value };
									});
								}}
								autoComplete="false"
								className="w-full text-sm bg-transparent p-1 autofill:bg-none focus:outline-none"
								name="email"
							/>
						</div>
						<p
							className={`${
								!error.email.err && "hidden"
							} text-xs py-1 text-end px-4 text-red`}
						>
							{error.email.msg[0]}
						</p>
					</div>

					<div>
						<label>
							<p className="py-2">Password:</p>
						</label>
						<div className="flex ring-1 p-1 rounded-md items-center">
							<BiLock className="text-3xl" />
							<input
								type={`${cpass ? "text" : "password"}`}
								value={userInfo.password}
								onChange={(e: ChangeEvent<HTMLInputElement>) => {
									setUserInfo((prv) => {
										return { ...prv, password: e.target.value };
									});
								}}
								autoComplete="false"
								className="w-full text-sm bg-transparent p-2 autofill:bg-none focus:outline-none"
								name="password"
							/>
							{cpass ? (
								<BsEyeSlashFill
									onClick={() => {
										setCpass((prv) => {
											return false;
										});
									}}
									className="cursor-pointer text-3xl pr-2"
								/>
							) : (
								<BsEyeFill
									onClick={() => {
										setCpass((prv) => {
											return true;
										});
									}}
									className="cursor-pointer text-3xl pr-2"
								/>
							)}
						</div>
						<p
							className={`${
								!error.password.err && "hidden"
							} text-xs py-1 text-end px-4 text-red`}
						>
							{error.password.msg[0]}
						</p>
					</div>
					<div>
						<label>
							<p className="py-2">Confirm Password:</p>
						</label>
						<div className="flex ring-1 p-1 rounded-md items-center">
							<BiLock className="text-3xl" />
							<input
								type={`${cpass2 ? "text" : "password"}`}
								value={userInfo.cpassword}
								onChange={(e: ChangeEvent<HTMLInputElement>) => {
									setUserInfo((prv) => {
										return { ...prv, cpassword: e.target.value };
									});
								}}
								autoComplete="false"
								className="w-full text-sm bg-transparent p-2 autofill:bg-none focus:outline-none"
								name="cpassword"
							/>
							{cpass2 ? (
								<BsEyeSlashFill
									onClick={() => {
										setCpass2((prv) => {
											return false;
										});
									}}
									className="cursor-pointer text-3xl pr-2"
								/>
							) : (
								<BsEyeFill
									onClick={() => {
										setCpass2((prv) => {
											return true;
										});
									}}
									className="cursor-pointer text-3xl pr-2"
								/>
							)}
						</div>
						<p
							className={`${
								!error.cpasword.err && "hidden"
							} text-xs py-1 text-end px-4 text-red`}
						>
							{error.cpasword.msg[0]}
						</p>
					</div>
					<button className="my-4 p-2 text-sm font-semibold hover:cursor-pointer bg-golden/70 text-white rounded-md w-full text-center">
						Sign Up
					</button>
					<Link className="my-1 p-2" href="/">
						You have an Account? Login Here.
					</Link>
				</form>
			</div>
		</UserAppWrapper>
	);
}
