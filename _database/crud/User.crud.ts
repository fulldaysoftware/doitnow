import { UserDataTypeServer } from "@/types/datatypes";
import User from "../models/user.model";
import { generateHash } from "@/lib/crypto";

export default async function createUser(data: UserDataTypeServer) {
    try{
        const result = await User.findOrCreate({
            where:{
                email: data.email
            },
            defaults: {
                email: data.email,
                fullname: data.fullname,
                password: await generateHash(data.password)
            }
        }) 
        return true
    } 
    catch(err) {
        return false
    }
}