import { create } from "zustand"

type ToastType = {
  isOpened: boolean
  type: "success" | "warning" | "error"
  text: string
  autoClose: boolean // true면 자동 닫힘, false면 수동 닫힘
}

type ToastStoreType = {
  toast: ToastType
  showToast: ({ type, text, autoClose }: { type: ToastType["type"]; text: string; autoClose?: boolean }) => void
  closeToast: () => void
}

export const useToast = create<ToastStoreType>((set) => ({
  toast: { isOpened: false, type: "success", text: "", autoClose: true },

  // 토스트 표시
  showToast: ({ type, text, autoClose = true }) => {
    set(() => ({
      toast: { isOpened: true, type, text, autoClose }
    }))

    // autoClose가 true일 경우 3초 후 자동 닫힘
    if (autoClose) {
      setTimeout(() => {
        set(() => ({
          toast: { isOpened: false, type, text, autoClose: true }
        }))
      }, 3000)
    }
  },

  // 토스트 수동 닫기
  closeToast: () => {
    set(() => ({
      toast: { isOpened: false, type: "success", text: "", autoClose: true }
    }))
  }
}))
