import { getKakaoLoginCallback } from "@/api/getKakaoLoginCallback"
import { redirect } from "next/navigation"
import LoginPage from "./components/LoginPage"
import RedirectSetCookieAuthTokens from "./components/RedirectSetCookieAuthTokens"

export default async function Login({ searchParams }: { searchParams: Promise<{ code: string }> }) {
  const { code } = await searchParams

  if (!code) return <LoginPage />

  try {
    const { access, refresh } = await getKakaoLoginCallback(code)
    if (!access || !refresh) return <LoginPage />

    return <RedirectSetCookieAuthTokens access={access} refresh={refresh} />
  } catch (e) {
    console.log(e)
    return redirect("/")
  }
}
