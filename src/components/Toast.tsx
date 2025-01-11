"use client"

import { useToast } from "@/sotre/toast"
import ReactDOM from "react-dom"

export default function Toast() {
  const { toast } = useToast()

  const element = typeof window !== "undefined" && document.getElementById(`toast`)

  if (!element) return null

  const content = toast.isOpened ? <section>{toast.content}</section> : null

  return ReactDOM.createPortal(content, element)
}
