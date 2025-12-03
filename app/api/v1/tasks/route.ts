
import sequelize from "@/_database/initiate"
import { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
    const data = await request.json()
    // console.log(data)
    const x = await sequelize.authenticate()
    console.log(x)
    return Response.json({success: true, data: 'null'}, {status: 200})
}