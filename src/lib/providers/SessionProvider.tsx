"use client"
import { useEffect } from "react"
import { getAccessToken } from "@/api/getAuthToken"
import { useUserStore } from "@/store/user"

export default function UserSessionProvider({ children }: { children: React.ReactNode }) {
  const { fetchUser } = useUserStore()

  useEffect(() => {
    // accessToken(쿠키)이 있을 때만 유저 정보 요청
    if (getAccessToken()) {
      fetchUser()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // 최초 1회만 실행

  return <>{children}</>
}
