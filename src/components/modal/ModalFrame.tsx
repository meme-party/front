import React from "react"
import ReactDOM from "react-dom"
import { motion } from "framer-motion"
import { useModalStore } from "@/store/modal"

export default function ModalFrame() {
  const { isOpen, closeModal, content } = useModalStore()

  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-lg"
      >
        <button
          className="text-gray-500 hover:text-gray-800 absolute right-4 top-4"
          onClick={closeModal}
          aria-label="Close modal"
        >
          ✖
        </button>
        {content}
      </motion.div>
    </div>,
    document.body
  )
}
