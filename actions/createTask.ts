import { actionStateTypes } from "@/types/statustypes";

export async function createTaskAction(state: actionStateTypes, formData: FormData): Promise<actionStateTypes> {
    return {error: false, message:""} as actionStateTypes
}