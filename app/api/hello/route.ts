import {NextResponse} from "next/server"

export async function GET() {
    return NextResponse.json({
        message: "Hello! 你的 API 路由跑通啦~",
        status: "success"
    })
}