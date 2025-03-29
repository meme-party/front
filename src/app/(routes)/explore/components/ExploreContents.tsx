"use client"
import { useGetApiV1MemesInfiniteQuery } from "@/api/react-query/useGetApiV1MemesQuery"
import MemeTypeButton from "@/components/MemeTypeButton"
import MoreViewButton from "@/components/MoreViewButton"
import SearchInput from "@/components/SearchInput"
import { COLORS } from "@/styles/colors"
import { Search, Type } from "lucide-react"
import dynamic from "next/dynamic"
// import MemeMasonry from "@/components/MemeMasonry"

const MemeMasonry = dynamic(() => import("@/components/MemeMasonry"))

export default function ExploreContents() {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetApiV1MemesInfiniteQuery()

  return (
    <>
      <section className="flex w-full max-w-[712px] flex-col gap-[32px] lg:mt-[80px]">
        <SearchInput
          placeholder="검색어를 입력해주세요"
          onSearch={() => console.log("검색 이벤트!")}
          Icon={Search}
          iconProps={{ color: COLORS.PRIMARY }}
        />
        <section className="flex flex-col gap-[16px]">
          <div className="flex flex-col items-start gap-[8px] md:flex-row md:items-center md:gap-[16px]">
            <p className="text-h2-sb text-gray-scale-100 md:text-h1-sb">유형별 밈</p>
            <p className="text-h4-r text-gray-scale-400 md:text-h2-r">
              찾고 있는 밈을 텍스트, 이미지/GIF, 비디오 유형으로 빠르게 찾아봐요!
            </p>
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
        </section>
        <MoreViewButton title="인기 밈 TOP 100" onClick={() => console.log("인기 밈 TOP 100 클릭")} />
        <article className="flex flex-col gap-[8px]">
          <p className="text-h2-sb text-gray-scale-100 md:text-h1-sb">방금 올라온 따끈따끈한 밈</p>
          <MemeMasonry
            data={data}
            fetchNextPage={fetchNextPage}
            isLoading={isLoading}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
          />
        </article>
      </section>
      <section className="hidden lg:flex" />
    </>
  )
}
