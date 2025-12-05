import { getAllUsers, getUser } from "@/_database/crud/User.crud"
import { NextRequest } from "next/server"

export async function GET(_req: NextRequest, _ctx: RouteContext<'/api/v1/users/[email]'>) {
    const {email} = await _ctx.params
    
    try {
        const data = await getUser(email)
        if(data.success){
            return Response.json({success: true, message: 'user is fetched', data: data.data}, {status: 200})
        }
        else {
            return Response.json({success: false, message: 'Unable to fetch user'}, {status: 400})
        }
    }
    catch(err) {
        return Response.json({success: false, message: 'Unable to fetch user'}, {status: 400})
    }
}