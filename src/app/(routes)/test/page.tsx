"use client"

import Button from "@/components/Button"
import Input from "@/components/Input"
import MemeTypeButton from "@/components/MemeTypeButton"
import SearchInput from "@/components/SearchInput"
import TagButton from "@/components/TagButton"
import Textarea from "@/components/Textarea"
import { useToast } from "@/store/toast"
import { COLORS } from "@/styles/colors"
import { Search, Type } from "lucide-react"

export default function TestPage() {
  const { showToast } = useToast()

  return (
    <section className="flex flex-col gap-[12px]">
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
      <Button className="w-[120px] text-white">컬렉션 1</Button>
      <Input placeholder="컬렉션 이름을 검색해주세요" />
      <Input placeholder="메모 내용을 입력해주세요" className="border-none" />
      <SearchInput
        placeholder="검색어를 입력해주세요"
        onSearch={() => console.log("검색 이벤트!")}
        Icon={Search}
        iconProps={{ color: COLORS.PRIMARY }}
      />
      <Textarea />
    </section>
  )
}
