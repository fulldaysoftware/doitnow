import { UserDataTypeServer } from "@/types/datatypes";
import { SignUpSchema } from "./inputvalidation";
type error = {
	fname: { err: boolean; msg: string[] };
	email: { err: boolean; msg: string[] };
	password: { err: boolean; msg: string[] };
	cpasword: { err: boolean; msg: string[] };
};
export async function validateUserCreate(userInfo: UserDataTypeServer) {
    const val = await SignUpSchema.safeParse(userInfo)
    let emptyErrObj: error = {
			fname: { err: false, msg: [] },
			email: { err: false, msg: [] },
			password: { err: false, msg: [] },
			cpasword: { err: false, msg: [] },
		};
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
			
		}
        return {success: true, data: emptyErrObj}
}