import { ReactNode } from "react"
import { create } from "zustand"

type ToastType = {
  isOpened: boolean
  content: ReactNode
  autoClose: boolean
}

type ToastStoreType = {
  toast: ToastType
  showToast: ({ content, autoClose }: { content: ToastType["content"]; autoClose?: boolean }) => void
  closeToast: () => void
}

export const useToast = create<ToastStoreType>((set) => ({
  toast: { isOpened: false, content: null, autoClose: true },

  // 토스트 표시
  showToast: ({ content, autoClose = true }) => {
    set(() => ({ toast: { isOpened: true, content, autoClose } }))

    // autoClose가 true일 경우 3초 후 자동 닫힘
    if (autoClose) {
      setTimeout(() => {
        set(() => ({ toast: { isOpened: false, content: null, autoClose: true } }))
      }, 3000)
    }
  },

  // 토스트 수동 닫기
  closeToast: () => {
    set(() => ({ toast: { isOpened: false, content: null, autoClose: true } }))
  }
}))
