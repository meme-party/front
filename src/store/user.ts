import { create } from "zustand"
import { UserDetail } from "@/openapi/models/UserDetail"
import { getUser } from "@/api/user"
import { deleteAccessToken } from "@/api/getAuthToken"

interface UserStore {
  user: UserDetail | null
  isLoading: boolean
  error: string | null
  fetchUser: () => Promise<void>
  logout: () => void
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  isLoading: false,
  error: null,

  // 유저 정보 불러오기
  fetchUser: async () => {
    set({ isLoading: true, error: null })
    try {
      const user = await getUser()
      set({ user, isLoading: false })
    } catch (e) {
      let errorMessage = "유저 정보 불러오기 실패"
      if (e instanceof Error) errorMessage = e.message
      set({ user: null, isLoading: false, error: errorMessage })
    }
  },

  // 로그아웃 처리
  logout: () => {
    deleteAccessToken()
    set({ user: null })
  }
}))
