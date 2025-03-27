import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const code = searchParams.get("code")
  const redirect_uri = process.env.NEXT_PUBLIC_LOGIN_REDIRECT_URI
  if (!code) return Response.error()
  if (!redirect_uri) return Response.error()

  try {
    const res = await fetch(
      `https://alpha-api.memez.party/api/v1/accounts/kakao/login/callback?code=${code}&redirect_uri=${redirect_uri}`
    ).then((res) => res.json())
    return NextResponse.json({ res })
  } catch (e) {
    console.log("error", e)
    return Response.json({ error: "server request error" })
  }
}
