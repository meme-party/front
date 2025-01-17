"use client"

import MemeTypeButton from "@/components/MemeTypeButton"
import { useToast } from "@/store/toast"
import { COLORS } from "@/styles/colors"
import { Type } from "lucide-react"

export default function TestPage() {
  const { showToast } = useToast()

  return (
    <section className="flex flex-col">
      <button onClick={() => showToast({ text: "테스트", type: "warning" })}>auto close Toast</button>
      <button onClick={() => showToast({ text: "테스트", type: "success", autoClose: false })}>Toast</button>
      <MemeTypeButton title="텍스트밈" Icon={Type} iconProps={{ size: 32, color: COLORS.DARK }} onClick={() => console.log('클릭')} />
    </section>
  )
}
