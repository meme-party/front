"use client"

import { useToast } from "@/store/toast"

export default function TestPage() {
  const { showToast } = useToast()

  return (
    <section className="flex flex-col">
      <button onClick={() => showToast({ text: "테스트", type: "warning" })}>auto close Toast</button>
      <button onClick={() => showToast({ text: "테스트", type: "success", autoClose: false })}>Toast</button>
    </section>
  )
}
