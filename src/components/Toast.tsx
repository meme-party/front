"use client"
import { Toaster } from "sonner"

export default function Toast() {
  return (
    <Toaster
      duration={3000}
      className="flex items-center justify-center font-pretendard"
      position="bottom-center"
      // offset={{ left: 0, right: 0 }}
      mobileOffset={{ left: 0, right: 0, bottom: 20 }}
      toastOptions={{
        classNames: {
          toast:
            "bg-primary-300 drop-shadow-toast backdrop-blur-lg border-none text-h2-m max-w-[280px] sm:max-w-[340px] justify-self-center p-[8px]"
        }
      }}
    />
  )
}
