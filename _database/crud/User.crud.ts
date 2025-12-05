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

export async function getAllUsers() {
    try {
        const data = await User.findAll()
        return {success: true, message: 'all users', data: data}

    }
    catch(err){
        return {success: true, message: 'unable to get users'}
    }
}

export async function getUser(id: string) {
    try {
       
        const data = await User.findOne({
            where: {
                email: id
            }
        })
        return {success: true, message: 'User info', data: data}

    }
    catch(err){
        return {success: true, message: 'unable to get user'}
    }
}