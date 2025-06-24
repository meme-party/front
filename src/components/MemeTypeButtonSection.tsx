"use client"

import { COLORS } from "@/styles/colors"
import { useRouter } from "next/navigation"
import MemeTypeButton from "./MemeTypeButton"
import { Type } from "lucide-react"

export default function MemeTypeButtonSection() {
  const router = useRouter()
  return (
    <article className="flex gap-[20px]">
      <MemeTypeButton
        title="텍스트밈"
        Icon={Type}
        iconProps={{ size: 24, color: COLORS.DARK, className: "flex-shrink-0" }}
        onClick={() => router.push("/explore/text")}
      />
      <MemeTypeButton
        title="이미지/GIF 밈"
        Icon={Type}
        iconProps={{ size: 24, color: COLORS.DARK, className: "flex-shrink-0" }}
        onClick={() => router.push("/explore/image")}
      />
      <MemeTypeButton
        title="비디오 밈"
        Icon={Type}
        iconProps={{ size: 24, color: COLORS.DARK, className: "flex-shrink-0" }}
        onClick={() => router.push("/explore/video")}
      />
    </article>
  )
}
