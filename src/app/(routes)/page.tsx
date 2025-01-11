"use client"

import { useToast } from "@/store/toast"

export default function Home() {
  const { showToast } = useToast()

  return (
    <section className="flex flex-col">
      <button onClick={() => showToast({ text: "테스트", type: "success" })}>auto close Toast</button>
      <button onClick={() => showToast({ text: "테스트", type: "success", autoClose: false })}>Toast</button>
    </section>
  )
}
