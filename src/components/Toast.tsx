"use client"

import { useToast } from "@/store/toast"
import { cn } from "@/utils/cn"
import { AnimatePresence, motion } from "framer-motion"
import dynamic from "next/dynamic"
import ReactDOM from "react-dom"

const CircleCheck = dynamic(() => import("@/icons/CircleCheck"))
const TriangleAlert = dynamic(() => import("@/icons/TriangleAlert"))
const CircleAlert = dynamic(() => import("@/icons/CircleAlert"))

export default function Toast() {
  const { toast, closeToast } = useToast()

  const element = typeof window !== "undefined" && document.getElementById(`toastPortal`)

  if (!element) return null

  // Todo type 에 따라 텍스트색상 다르게 할건지 논의 필요
  // const toastTypeClasses = {
  //   success: "text-primary-300",
  //   warning: "text-yellow-500",
  //   error: "text-red-500"
  // }

  const content = (
    <AnimatePresence>
      {toast.isOpened && (
        <motion.section
          className="fixed bottom-0 flex w-full justify-center bg-dark/60 px-6 py-10 drop-shadow-toast backdrop-blur-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut"
          }}
        >
          <article className="flex w-full max-w-[1280px] items-center justify-between">
            <div
              className={cn(
                "flex gap-[4px] text-primary-300"
                // toastTypeClasses[toast.type]
              )}
            >
              {toast.type === "success" && <CircleCheck pathColor="#17161799" />}
              {toast.type === "warning" && <TriangleAlert pathColor="#17161799" />}
              {toast.type === "error" && <CircleAlert pathColor="#17161799" />}

              {toast.text}
            </div>
            {!toast.autoClose && (
              <button
                className="min-w-[148px] rounded-md bg-gray-scale-800 px-3 py-2 text-white hover:bg-gray-scale-700"
                onClick={closeToast}
              >
                완료
              </button>
            )}
          </article>
        </motion.section>
      )}
    </AnimatePresence>
  )

  return ReactDOM.createPortal(content, element)
}
