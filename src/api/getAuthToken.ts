import { COOKIE_KEY } from "@/constants/cookieId"
import { getCookie, deleteCookie } from "cookies-next"

export const getClientAccessToken = () => {
  return getCookie(COOKIE_KEY.ACCESS_TOKEN)
}

export const deleteClientAccessToken = () => {
  return deleteCookie(COOKIE_KEY.ACCESS_TOKEN)
}
