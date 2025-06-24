"use client"
import { useGetApiV1MemesInfiniteQuery } from "@/api/react-query/useGetApiV1MemesQuery"
import OrderingToggle from "@/app/(routes)/explore/components/OrderingToggle"
import SearchInput from "@/components/SearchInput"
import { COLORS } from "@/styles/colors"
import { createQueryUrl } from "@/utils/createQueryUrl"
import { ChevronLeft, Search } from "lucide-react"
import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"
// import MemeMasonry from "@/components/MemeMasonry"

const MemeMasonry = dynamic(() => import("@/components/MemeMasonry"))

export default function ImageContents() {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetApiV1MemesInfiniteQuery({
    perPage: 20,
    ordering: "popularity",
    type: "Image"
  })

  const router = useRouter()

  return (
    <>
      <section className="flex w-full max-w-[712px] flex-col gap-[32px] lg:mt-[80px]">
        <button className="flex items-center gap-[8px] text-gray-scale-400" onClick={() => router.push("/explore")}>
          <ChevronLeft />
          <p className="text-h3-r">탐색 홈</p>
        </button>
        <article className="flex flex-col gap-[16px]">
          <div className="flex flex-col items-start gap-[8px] md:flex-row md:items-center md:gap-[16px]">
            <p className="text-h2-sb text-gray-scale-100 md:text-h1-sb">이미지/GIF 밈</p>
            <p className="text-h4-r text-gray-scale-400 md:text-h2-r">이미지, gif로 이루어진 밈을 소개해요!</p>
          </div>
          <SearchInput
            placeholder="검색어를 입력해주세요"
            onSearch={(value) => router.push(createQueryUrl("/explore/search", { keyword: value }))}
            Icon={Search}
            iconProps={{ color: COLORS.PRIMARY }}
          />
        </article>
        <article className="flex w-fit flex-col gap-[16px]">
          <OrderingToggle />
          <p className="text-h2-r text-gray-scale-400">클릭하면 세부 페이지로 이동합니다</p>
        </article>
        <article className="flex flex-col gap-[8px]">
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
