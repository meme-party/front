import { createQueryKeyFactory } from "@/api/core/createResourceHooks"
import { authApi } from "@/api/endpoints/auth"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import type {
  UserDetail,
  Login,
  SocialLogin,
  PasswordChange,
  PasswordReset,
  PasswordResetConfirm,
  TokenRefresh,
  TokenVerify,
  ApiV1AccountsKakaoLoginCallbackRetrieveRequest
} from "@/openapi"
import { createAuthCookies, deleteAccessToken } from "../createAuthCookies"

// 🔑 Query Keys
export const userKeys = createQueryKeyFactory("users")
export const authKeys = createQueryKeyFactory("auth")

// // 🏭 기본 사용자 CRUD hooks
// export const {
//   useDetailQuery: useUserDetailQuery,
//   useUpdateMutation: useUpdateUserMutation,
//   // list, create, delete는 사용하지 않음
// } = createResourceHooks<
//   UserDetail,
//   never, // 리스트 조회 없음
//   never, // 생성 없음 (회원가입은 별도)
//   Partial<UserDetail>
// >({
//   resourceName: 'users',
//   api: usersApi,
//   queryKeys: userKeys,
// });

// // 👤 현재 사용자 정보 조회
// export const useCurrentUserQuery = () =>
//   useUserDetailQuery('me', {
//     retry: false, // 인증 실패 시 재시도하지 않음
//   });

// 🔐 인증 관련 hooks

// 카카오 로그인 콜백
export const useKakaoLoginCallbackQuery = (params: ApiV1AccountsKakaoLoginCallbackRetrieveRequest) =>
  useQuery({
    queryKey: [...authKeys.all, "kakao-callback", params],
    queryFn: () => authApi.kakaoLoginCallback(params),
    enabled: !!params.code,
    retry: false
  })

// 일반 로그인
export const useLoginMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: Login) => authApi.login(data),
    onSuccess: (response) => {
      // 🍪 토큰을 쿠키에 저장
      if (response.access && response.refresh) {
        createAuthCookies(response.access, response.refresh)
      }

      // 🔄 사용자 정보 캐시 무효화 (새로 로그인한 사용자 정보 가져오기)
      queryClient.invalidateQueries({ queryKey: userKeys.all })

      console.log("✅ 로그인 성공")
    },
    onError: (error) => {
      console.error("❌ 로그인 실패:", error)
    }
  })
}

// 카카오 로그인 완료
export const useKakaoLoginFinishMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data?: SocialLogin) => authApi.kakaoLoginFinish(data),
    onSuccess: () => {
      // 토큰 처리 로직 (응답 구조에 따라 조정 필요)
      console.log("✅ 카카오 로그인 완료")
      queryClient.invalidateQueries({ queryKey: userKeys.all })
    },
    onError: (error) => {
      console.error("❌ 카카오 로그인 완료 실패:", error)
    }
  })
}

// 로그아웃
export const useLogoutMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => authApi.logout(),
    onSuccess: () => {
      // 🍪 토큰 쿠키 삭제
      deleteAccessToken()

      // 🗑️ 모든 캐시 클리어
      queryClient.clear()

      console.log("✅ 로그아웃 성공")

      // 🔄 로그인 페이지로 리다이렉트 (필요시)
      if (typeof window !== "undefined") {
        window.location.href = "/login"
      }
    },
    onError: (error) => {
      console.error("❌ 로그아웃 실패:", error)
      // 실패해도 클라이언트 측 정리는 수행
      deleteAccessToken()
      queryClient.clear()
    }
  })
}

// 비밀번호 변경
export const useChangePasswordMutation = () =>
  useMutation({
    mutationFn: (data: PasswordChange) => authApi.changePassword(data),
    onSuccess: () => {
      console.log("✅ 비밀번호 변경 성공")
    },
    onError: (error) => {
      console.error("❌ 비밀번호 변경 실패:", error)
    }
  })

// 비밀번호 재설정 요청
export const useResetPasswordMutation = () =>
  useMutation({
    mutationFn: (data: PasswordReset) => authApi.resetPassword(data),
    onSuccess: () => {
      console.log("✅ 비밀번호 재설정 이메일 전송 성공")
    },
    onError: (error) => {
      console.error("❌ 비밀번호 재설정 요청 실패:", error)
    }
  })

// 비밀번호 재설정 확인
export const useConfirmPasswordResetMutation = () =>
  useMutation({
    mutationFn: (data: PasswordResetConfirm) => authApi.confirmPasswordReset(data),
    onSuccess: () => {
      console.log("✅ 비밀번호 재설정 완료")
    },
    onError: (error) => {
      console.error("❌ 비밀번호 재설정 확인 실패:", error)
    }
  })

// 토큰 갱신
export const useRefreshTokenMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: Omit<TokenRefresh, "access">) => authApi.refreshToken(data),
    onSuccess: (response) => {
      // 🍪 새 토큰으로 쿠키 업데이트
      if (response.access) {
        createAuthCookies(response.access, response.refresh || "")
      }

      console.log("✅ 토큰 갱신 성공")
    },
    onError: (error) => {
      console.error("❌ 토큰 갱신 실패:", error)
      // 토큰 갱신 실패 시 로그아웃 처리
      deleteAccessToken()
      queryClient.clear()
    }
  })
}

// 토큰 검증
export const useVerifyTokenQuery = (token?: string) =>
  useQuery({
    queryKey: [...authKeys.all, "verify-token", token],
    queryFn: () => authApi.verifyToken(token ? { token } : undefined),
    enabled: false, // 수동으로 실행
    retry: false
  })

// 토큰 검증 (mutation 버전)
export const useVerifyTokenMutation = () =>
  useMutation({
    mutationFn: (data?: TokenVerify) => authApi.verifyToken(data),
    onError: (error) => {
      console.error("❌ 토큰 검증 실패:", error)
    }
  })

// // 로그인 상태 확인
// export const useAuthStatus = () => {
//   const { data: user, isLoading, error } = useCurrentUserQuery();

//   return {
//     isAuthenticated: !!user && !error,
//     isLoading,
//     user,
//     error,
//   };
// };

// 사용자 권한 확인 (확장용)
// export const useUserPermissions = () => {
//   const { user } = useAuthStatus()

//   return {
//     canCreateBookmark: !!user,
//     canEditProfile: !!user,
//     isAdmin: user?.is_staff || false,
//     isSuperUser: user?.is_superuser || false
//   }
// }

// 프로필 업데이트 (부분 수정)
export const useUpdateProfileMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: Partial<UserDetail>) => authApi.updateCurrentUser(data),
    onSuccess: (updatedUser) => {
      // 🎯 현재 사용자 캐시 즉시 업데이트
      queryClient.setQueryData(userKeys.detail("me"), updatedUser)

      console.log("✅ 프로필 업데이트 성공")
    },
    onError: (error) => {
      console.error("❌ 프로필 업데이트 실패:", error)
    }
  })
}

// 완전한 프로필 교체 (전체 수정)
export const useReplaceProfileMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: Partial<UserDetail>) => authApi.replaceCurrentUser(data),
    onSuccess: (updatedUser) => {
      queryClient.setQueryData(userKeys.detail("me"), updatedUser)
      console.log("✅ 프로필 교체 성공")
    },
    onError: (error) => {
      console.error("❌ 프로필 교체 실패:", error)
    }
  })
}
