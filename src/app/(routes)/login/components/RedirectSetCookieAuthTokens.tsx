"use client"
import { setCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import LoginPage from "./LoginPage"
import useDidMountEffect from "@/hooks/useDidMountEffect"
import { COOKIE_KEY } from "@/constants/cookieId"

type Props = {
  access: string
  refresh: string
}

export default function RedirectSetCookieAuthTokens({ access, refresh }: Props) {
  const router = useRouter()
  useDidMountEffect(() => {
    setCookie(COOKIE_KEY.ACCESS_TOKEN, access)
    setCookie(COOKIE_KEY.REFRESH_TOKEN, refresh)
    console.log("로그인")
    router.push("/")
  }, [])

  return <LoginPage isProcess={true} />
}
