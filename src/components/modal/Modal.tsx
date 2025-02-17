"use client"
import React from "react"
import ReactDOM from "react-dom"
import { motion } from "framer-motion"
import { useModalStore } from "@/store/modal"

export default function Modal() {
  const { isOpen, closeModal, content } = useModalStore()

  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-scale-900 backdrop-blur-2xl"
      onClick={closeModal}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative rounded-lg bg-gray-scale-800 p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {content}
      </motion.div>
    </div>,
    document.body
  )
}
