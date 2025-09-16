import { fetcher } from "@/api/core/fetcher"
import type {
  UserDetail,
  JWT,
  RestAuthDetail,
  KakaoAuthResponse,
  Login,
  SocialLogin,
  PasswordChange,
  PasswordReset,
  PasswordResetConfirm,
  TokenRefresh,
  TokenVerify,
  ApiV1AccountsKakaoLoginCallbackRetrieveRequest,
  ApiV1AccountsUserPartialUpdateRequest,
  ApiV1AccountsUserUpdateRequest
} from "@/openapi"
import type { SearchParamsOption } from "ky"
import { getClientAccessToken } from "../getAuthToken"

export const authApi = {
  // GET /api/v1/accounts/kakao/login/callback/
  kakaoLoginCallback: (params: ApiV1AccountsKakaoLoginCallbackRetrieveRequest) => {
    const redirectUri = params.redirectUri ? params.redirectUri : process.env.NEXT_PUBLIC_LOGIN_REDIRECT_URI
    if (!redirectUri) throw Error("No Exist Redirect URI")
    const searchParams = [
      [params.code, params.code],
      [params.redirectUri, params.redirectUri]
    ] as SearchParamsOption
    fetcher.get<KakaoAuthResponse>("api/v1/accounts/kakao/login/callback/", {
      searchParams
    })
  },

  // POST /api/v1/accounts/kakao/login/finish/
  kakaoLoginFinish: (data?: SocialLogin) =>
    fetcher.post<SocialLogin>("api/v1/accounts/kakao/login/finish/", {
      json: data
    }),

  // POST /api/v1/accounts/login/
  login: (data: Login) => fetcher.post<JWT>("api/v1/accounts/login/", { json: data }),

  // POST /api/v1/accounts/logout/
  logout: () => fetcher.post<RestAuthDetail>("api/v1/accounts/logout/"),

  // POST /api/v1/accounts/password/change/
  changePassword: (data: PasswordChange) =>
    fetcher.post<RestAuthDetail>("api/v1/accounts/password/change/", {
      json: data
    }),

  // POST /api/v1/accounts/password/reset/
  resetPassword: (data: PasswordReset) =>
    fetcher.post<RestAuthDetail>("api/v1/accounts/password/reset/", {
      json: data
    }),

  // POST /api/v1/accounts/password/reset/confirm/
  confirmPasswordReset: (data: PasswordResetConfirm) =>
    fetcher.post<RestAuthDetail>("api/v1/accounts/password/reset/confirm/", {
      json: data
    }),

  // POST /api/v1/accounts/token/refresh/
  refreshToken: (data: Omit<TokenRefresh, "access">) =>
    fetcher.post<TokenRefresh>("api/v1/accounts/token/refresh/", {
      json: data
    }),

  // POST /api/v1/accounts/token/verify/
  verifyToken: (data?: TokenVerify) => {
    const token = data?.token || getClientAccessToken()
    return fetcher.post<TokenVerify>("api/v1/accounts/token/verify/", {
      json: { token }
    })
  },

  // GET /api/v1/accounts/user/
  getCurrentUser: () => fetcher.get<UserDetail>("api/v1/accounts/user/"),

  // PATCH /api/v1/accounts/user/
  updateCurrentUser: (
    data: Omit<ApiV1AccountsUserPartialUpdateRequest["patchedUserDetail"], "pk" | "email" | "social_account">
  ) => fetcher.patch<UserDetail>("api/v1/accounts/user/", { json: data }),

  // PUT /api/v1/accounts/user/
  replaceCurrentUser: (data: Omit<ApiV1AccountsUserUpdateRequest["userDetail"], "pk" | "email" | "social_account">) =>
    fetcher.put<UserDetail>("api/v1/accounts/user/", { json: data })
} as const
