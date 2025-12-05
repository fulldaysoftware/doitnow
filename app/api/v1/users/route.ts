import { getAllUsers } from "@/_database/crud/User.crud"
import { NextRequest } from "next/server"

export async function GET(_req: NextRequest, _ctx: RouteContext<'/api/v1/users'>) {
    try {
        const data = await getAllUsers()
        if(data.success){
            return Response.json({success: true, message: 'all users are fetched', data: data.data}, {status: 200})
        }
        else {
            return Response.json({success: false, message: 'Unable to fetch users'}, {status: 400})
        }
    }
    catch(err) {
        return Response.json({success: false, message: 'Unable to fetch users'}, {status: 400})
    }
}