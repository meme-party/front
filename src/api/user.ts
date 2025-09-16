import { fetcher } from "@/api/core/fetcher"
import { TokenVerify } from "@/openapi/models/TokenVerify"
import { getClientAccessToken } from "./getAuthToken"
import { UserDetail } from "@/openapi/models/UserDetail"

export function getUser() {
  return fetcher.get<UserDetail>(`api/v1/accounts/user/`)
}

export function verifyToken() {
  const token = getClientAccessToken()
  console.log("?", token)
  return fetcher.post<TokenVerify>("api/v1/accounts/token/verify", {
    json: { token }
  })
}
