"use client"
import { useGetApiV1MemesInfiniteQuery } from "@/api/react-query/useGetApiV1MemesQuery"
import SearchInput from "@/components/SearchInput"
import TagButton from "@/components/TagButton"
import { COLORS } from "@/styles/colors"
import { createQueryUrl } from "@/utils/createQueryUrl"
import { Search } from "lucide-react"
import dynamic from "next/dynamic"
import { useRouter, useSearchParams } from "next/navigation"
// import MemeMasonry from "@/components/MemeMasonry"

const MemeMasonry = dynamic(() => import("@/components/MemeMasonry"))

export default function SearchContents() {
  const searchParams = useSearchParams()
  const keyword = searchParams.get("keyword")

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetApiV1MemesInfiniteQuery({
    search: keyword ?? "",
    perPage: 20
  })

  const router = useRouter()

  return (
    <>
      <section className="flex w-full max-w-[712px] flex-col gap-[32px] lg:mt-[80px]">
        <SearchInput
          placeholder="검색어를 입력해주세요"
          onSearch={(value) => router.push(createQueryUrl("/explore/search", { keyword: value }))}
          Icon={Search}
          iconProps={{ color: COLORS.PRIMARY }}
          defaultValue={keyword?.toString()}
        />
        <article className="flex flex-col gap-[8px] md:gap-[16px]">
          <p className="text-h4-r text-gray-scale-400 md:text-h2-r">총 5개의 검색 관련 키워드</p>
          <article className="flex flex-wrap gap-[8px] md:gap-[16px]">
            <TagButton title="ㄱ키워드" variant="colored" onClick={() => console.log("TagButton2 클릭")} />
            <TagButton
              title="키워드키워드키워드키워드키워드키워드키워드키워드키워드키워드키워드키"
              variant="colored"
              onClick={() => console.log("TagButton2 클릭")}
            />
            <TagButton
              title="키워드키워드키워드키워드"
              variant="colored"
              onClick={() => console.log("TagButton2 클릭")}
            />
            <TagButton title="ㄱ키워드" variant="colored" onClick={() => console.log("TagButton2 클릭")} />
            <TagButton title="ㄱ키워드" variant="colored" onClick={() => console.log("TagButton2 클릭")} />
          </article>
        </article>
        <article className="flex flex-col gap-[8px]">
          <p className="text-h2-sb text-gray-scale-100 md:text-h1-sb">검색 결과와 관련된 밈</p>
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
