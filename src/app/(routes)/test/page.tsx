"use client"

import Button from "@/components/Button"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Input from "@/components/Input"
import MemeTypeButton from "@/components/MemeTypeButton"
import MoreViewButton from "@/components/MoreViewButton"
import SearchInput from "@/components/SearchInput"
import TagButton from "@/components/TagButton"
import TagSmallButton from "@/components/TagSmallButton"
import Textarea from "@/components/Textarea"
import { COLORS } from "@/styles/colors"
import { Search, Type } from "lucide-react"
import { toast } from "sonner"

export default function TestPage() {
  return (
    <section className="mx-[20px] my-[80px] flex flex-col gap-[12px]">
      <Header />
      <Footer />
      <button onClick={() => toast.success("삭제가 완료되었습니다!")}>토스트 메세지</button>
      <MemeTypeButton
        title="텍스트밈"
        Icon={Type}
        iconProps={{ size: 32, color: COLORS.DARK }}
        onClick={() => console.log("밈 타입 버튼 클릭")}
      />
      <article className="flex gap-[12px]">
        <TagButton title="키워드" onClick={() => console.log("TagButton1 클릭")} />
        <TagButton title="ㄱ키워드" variant="colored" onClick={() => console.log("TagButton2 클릭")} />
        <TagSmallButton title="ㄱ키워드" onClick={() => console.log("TagSmallButton1 클릭")} />
        <TagSmallButton title="ㄱ키워드" variant="colored" onClick={() => console.log("TagSmallButton2 클릭")} />
      </article>
      <Button className="w-[120px] text-gray-scale-100">컬렉션 1</Button>
      <article className="flex gap-[12px]">
        <Input placeholder="컬렉션 이름을 검색해주세요" />
        <Input placeholder="메모 내용을 입력해주세요" className="border-none" />
      </article>
      <article className="flex gap-[12px]">
        <MoreViewButton title="인기 밈 TOP 100" onClick={() => console.log("인기 밈 TOP 100 클릭")} />
      </article>
      <article className="flex gap-[12px]">
        <SearchInput
          placeholder="검색어를 입력해주세요"
          onSearch={() => console.log("검색 이벤트!")}
          Icon={Search}
          iconProps={{ color: COLORS.PRIMARY }}
        />
        <SearchInput placeholder="아이콘 없는 검색 Input" onSearch={() => console.log("검색 이벤트!")} />
      </article>
      <article className="flex gap-[12px]">
        <Textarea placeholder="메모를 입력해주세요" />
        <Textarea placeholder="메모를 입력해주세요" className="border-none" />
      </article>
    </section>
  )
}
