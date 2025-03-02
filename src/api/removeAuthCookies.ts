"use server"

import { COOKIE_KEY } from "@/constants/cookieId"
import { cookies } from "next/headers"

export const removeAuthCookies = async () => {
  const cookieStore = await cookies()
  cookieStore.delete(COOKIE_KEY.ACCESS_TOKEN)
  cookieStore.delete(COOKIE_KEY.REFRESH_TOKEN)
}
