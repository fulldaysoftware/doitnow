import createUser from "@/_database/crud/User.crud";
import { validateUserCreate } from "@/lib/appvalidate";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const userInfo = await request.json()
    const validate = await validateUserCreate(userInfo)
    if(validate.success) {
        const result = await createUser(userInfo)
        if(result) {
            return Response.json({success: true , message: 'user is created successfully'}, {status: 200})
        }
        else {
            return Response.json({success: false, message: 'Unable to create user'}, {status: 400})
        }
    }
    else {
        return Response.json({success: false, message: 'invalid Input'}, {status: 422})
    }

}