"use client"

import { useToast } from "@/store/toast"
import { cn } from "@/utils/cn"
import { AnimatePresence, motion } from "framer-motion"
import ReactDOM from "react-dom"

export default function Toast() {
  const { toast, closeToast } = useToast()

  const element = typeof window !== "undefined" && document.getElementById(`toastPortal`)

  if (!element) return null

  const content = (
    <AnimatePresence>
      {toast.isOpened && (
        <motion.section
          className="fixed w-full bottom-0 bg-[#171617]/60 py-10 flex justify-center px-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut"
          }}
          style={{
            filter: "drop-shadow(-10px 0px 24px rgba(0, 0, 0, 0.25))",
            backdropFilter: "blur(16px)"
          }}
        >
          <div className="flex items-center justify-between max-w-[1280px] w-full">
            <p
              className={cn(
                toast.type === "success" && "text-primary-300",
                toast.type === "warning" && "text-yellow-500",
                toast.type === "error" && "text-red-500"
              )}
            >
              {toast.text}
            </p>
            {!toast.autoClose && (
              <button
                className="px-3 py-2 min-w-[148px] bg-gray-800 text-white rounded-md hover:bg-gray-700"
                onClick={closeToast}
              >
                완료
              </button>
            )}
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  )

  return ReactDOM.createPortal(content, element)
}
