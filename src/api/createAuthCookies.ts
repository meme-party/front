"use server"

import { cookies } from "next/headers"

export async function createAuthCookies(access: string, refresh: string) {
  const cookieStore = await cookies()

  cookieStore.set({
    name: "access",
    value: access,
    httpOnly: true
  })
  cookieStore.set({
    name: "refresh",
    value: refresh,
    httpOnly: true
  })
}
export async function deleteAccessToken() {
  const cookieStore = await cookies()

  cookieStore.delete({
    name: "access"
  })
}
