"use client"
import { useTagsFavoriteQuery } from "@/api/hooks/tags"
import TagButton from "@/components/TagButton"

export default function TrendingTags() {
  const { data: favoriteTags, isLoading } = useTagsFavoriteQuery({
    perPage: 10 // 트렌드 태그 10개 표시
  })

  if (isLoading) {
    return (
      <section className="flex flex-col gap-[12px] rounded-[8px] bg-gray-scale-800 px-[12px] py-[16px] md:px-[24px] md:py-[24px]">
        <article className="flex items-center gap-[4px]">
          <p className="text-h2-sb text-gray-scale-100 md:text-h1-sb">트렌드 키워드</p>
          <p className="text-h4-r text-gray-scale-400 md:text-h2-r">지금 핫한 밈 키워드를 소개해요</p>
        </article>
        <article className="flex flex-wrap gap-[8px] md:gap-[16px]">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-8 w-20 animate-pulse rounded-full bg-gray-700" />
          ))}
        </article>
      </section>
    )
  }

  return (
    <section className="flex flex-col gap-[12px] rounded-[8px] bg-gray-scale-800 px-[12px] py-[16px] md:px-[24px] md:py-[24px]">
      <article className="flex items-center gap-[4px]">
        <p className="text-h2-sb text-gray-scale-100 md:text-h1-sb">트렌드 키워드</p>
        <p className="text-h4-r text-gray-scale-400 md:text-h2-r">지금 핫한 밈 키워드를 소개해요</p>
      </article>
      <article className="flex flex-wrap gap-[8px] md:gap-[16px]">
        {favoriteTags?.results?.map((tag) => (
          <TagButton
            key={tag.id}
            title={tag.name}
            variant="colored"
            onClick={() => {
              // 태그 검색 페이지로 이동
              window.location.href = `/explore/search?tag=${encodeURIComponent(tag.name)}`
            }}
          />
        )) || (
          // 폴백: 기본 트렌드 키워드들
          <>
            <TagButton title="웃긴짤" variant="colored" onClick={() => console.log("TagButton 클릭")} />
            <TagButton title="패러디" variant="colored" onClick={() => console.log("TagButton 클릭")} />
            <TagButton title="밈" variant="colored" onClick={() => console.log("TagButton 클릭")} />
            <TagButton title="유머" variant="colored" onClick={() => console.log("TagButton 클릭")} />
            <TagButton title="드립" variant="colored" onClick={() => console.log("TagButton 클릭")} />
            <TagButton title="짤방" variant="colored" onClick={() => console.log("TagButton 클릭")} />
          </>
        )}
      </article>
    </section>
  )
}
