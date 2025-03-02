// Todo page.tsx 에서 use client 로직 분리
"use client"
import MemeTypeButton from "@/components/MemeTypeButton"
import MoreViewButton from "@/components/MoreViewButton"
import SearchInput from "@/components/SearchInput"
import Sidebar from "@/components/Sidebar"
import { COLORS } from "@/styles/colors"
import { Search, Type } from "lucide-react"
import dynamic from "next/dynamic"

const Masonry = dynamic(() => import("@/components/Masonry"), { ssr: false })

export default function ExplorePage() {
  return (
    <section className="my-[60px]">
      <section className="flex justify-center lg:justify-between">
        <Sidebar />
        <section className="flex w-full max-w-[712px] flex-col gap-[28px] lg:mt-[80px]">
          <SearchInput
            placeholder="검색어를 입력해주세요"
            onSearch={() => console.log("검색 이벤트!")}
            Icon={Search}
            iconProps={{ color: COLORS.PRIMARY }}
          />
          <div className="flex">
            <p>유형별 밈</p>
            <p>찾고 있는 밈을 텍스트, 이미지/GIF, 비디오 유형으로 빠르게 찾아봐요!</p>
          </div>
          <article className="flex gap-[20px]">
            <MemeTypeButton
              title="텍스트밈"
              Icon={Type}
              iconProps={{ size: 24, color: COLORS.DARK, className: "flex-shrink-0" }}
              onClick={() => console.log("밈 타입 버튼 클릭")}
            />
            <MemeTypeButton
              title="이미지/GIF 밈"
              Icon={Type}
              iconProps={{ size: 24, color: COLORS.DARK, className: "flex-shrink-0" }}
              onClick={() => console.log("밈 타입 버튼 클릭")}
            />
            <MemeTypeButton
              title="비디오 밈"
              Icon={Type}
              iconProps={{ size: 24, color: COLORS.DARK, className: "flex-shrink-0" }}
              onClick={() => console.log("밈 타입 버튼 클릭")}
            />
          </article>
          <MoreViewButton title="인기 밈 TOP 100" onClick={() => console.log("인기 밈 TOP 100 클릭")} />
          <p>방금 올라온 따끈따끈한 밈</p>
          <Masonry />
        </section>
        <section className="hidden lg:flex" />
      </section>
    </section>
  )
}
