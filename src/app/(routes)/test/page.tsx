"use client"

import MemeTypeButton from "@/components/MemeTypeButton"
import TagButton from "@/components/TagButton"
import { useToast } from "@/store/toast"
import { COLORS } from "@/styles/colors"
import { Type } from "lucide-react"

export default function TestPage() {
  const { showToast } = useToast()

  return (
    <section className="flex flex-col">
      <button onClick={() => showToast({ text: "테스트", type: "warning" })}>auto close Toast</button>
      <button onClick={() => showToast({ text: "테스트", type: "success", autoClose: false })}>Toast</button>
      <MemeTypeButton
        title="텍스트밈"
        Icon={Type}
        iconProps={{ size: 32, color: COLORS.DARK }}
        onClick={() => console.log("밈 타입 버튼 클릭")}
      />
      <article className="flex gap-[12px]">
        <TagButton title="키워드" onClick={() => console.log("TagButton1 클릭")} />
        <TagButton title="ㄱ키워드" selected onClick={() => console.log("TagButton2 클릭")} />
      </article>
    </section>
  )
}
