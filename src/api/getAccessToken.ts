"use server"

import { COOKIE_KEY } from "@/constants/cookieId"
import { cookies } from "next/headers"

export const getAccessToken = async () => {
  const cookieStore = await cookies()
  return cookieStore.get(COOKIE_KEY.ACCESS_TOKEN)
}
