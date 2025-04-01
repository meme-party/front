import { COOKIE_KEY } from "@/constants/cookieId"
import { getCookie, deleteCookie } from "cookies-next"

export const getAccessToken = () => {
  return getCookie(COOKIE_KEY.ACCESS_TOKEN)
}

export const deleteAccessToken = () => {
  return deleteCookie(COOKIE_KEY.ACCESS_TOKEN)
}
