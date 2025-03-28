import { getCookie, deleteCookie } from "cookies-next"

export const getAccessToken = () => {
  return getCookie("access")
}

export const deleteAccessToken = () => {
  return deleteCookie("access")
}
