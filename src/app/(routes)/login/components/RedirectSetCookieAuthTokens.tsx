"use client"
import useDidMountEffect from "@/app/hooks/useDidMoutEffect"
import { setCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import LoginPage from "./LoginPage"

type Props = {
  access: string
  refresh: string
}

export default function RedirectSetCookieAuthTokens({ access, refresh }: Props) {
  const router = useRouter()
  useDidMountEffect(() => {
    setCookie("access", access)
    setCookie("refresh", refresh)
    console.log("로그인")
    router.push("/")
  }, [])

  return <LoginPage isProcess={true} />
}
