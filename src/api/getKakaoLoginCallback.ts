import { fetcher } from "./fetcher"

type ReturnType = {
  access: string
  refresh: string
}

export function getKakaoLoginCallback(code: string) {
  const redirect_uri = process.env.NEXT_PUBLIC_LOGIN_REDIRECT_URI
  return fetcher.get<ReturnType>(`api/v1/accounts/kakao/login/callback?code=${code}&redirect_uri=${redirect_uri}`)
}
