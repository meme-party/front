"use client"

import TagButton from "@/components/TagButton"

export default function MyFavorite() {
  const dummyCategories = [
    "키워드",
    "키워드키워드",
    "키워드키워드키워드키워드",
    "키워드키워드",
    "키워드키워드",
    "키워드키워드"
  ]
  return (
    <div className="w-full rounded-[12px] bg-gray-scale-800 p-[24px]">
      <div className="flex flex-col gap-[12px]">
        <p className="text-h1-sb">나의 취향</p>
        <p className="text-h2-r text-gray-scale-400">담은 밈들 중, 당신이 좋아하는 태그를 모아봤어요!</p>
      </div>
      <div className="flex flex-wrap gap-[16px] pt-[32px]">
        {dummyCategories.map((category, idx) => (
          <TagButton title={category} key={idx} variant="colored" onClick={() => console.log("클릭")} />
        ))}
      </div>
    </div>
  )
}
