export function GET(request: Request){
    // 服务端打印 查看请求如何传入
    console.log("收到请求的URL:",request.url)
    console.log("请求方法：", request.method)

    // 返回一个标准的 JSON 响应
    // 你可以使用标准的 Web API Response，Next.js 完美支持
    return Response.json({
        ok: true
    })

    // 或者你也可以继续用 Next.js 封装的 NextResponse：
    // return NextResponse.json({ ok: true });
}
export async function POST(request: Request){
    const body = await request.json()

    return Response.json({
        receivedData: body,
        message:'POST 请求接收成功'
    })
}