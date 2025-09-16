import { fetcher } from "@/api/core/fetcher"
import { KakaoAuthResponse } from "@/openapi/models/KakaoAuthResponse"

export function getKakaoLoginCallback(code: string) {
  const redirect_uri = process.env.NEXT_PUBLIC_LOGIN_REDIRECT_URI
  return fetcher.get<KakaoAuthResponse>(
    `api/v1/accounts/kakao/login/callback?code=${code}&redirect_uri=${redirect_uri}`
  )
}
