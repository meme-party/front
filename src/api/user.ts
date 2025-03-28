import { TokenVerify, UserDetail } from "../../models"
import { fetcher } from "./fetcher"
import { getAccessToken } from "./getAuthToken"

export function getUser() {
  return fetcher.get<UserDetail>(`api/v1/accounts/user/`)
}

export function verifyToken() {
  const token = getAccessToken()
  console.log("?", token)
  return fetcher.post<TokenVerify>("api/v1/accounts/token/verify", {
    json: { token }
  })
}
