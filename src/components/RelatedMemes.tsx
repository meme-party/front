"use client"
import { useMemeRelatedQuery } from "@/api/hooks/memes"
import ThumbnailCard from "@/components/ThumbnailCard"
import { useParams } from "next/navigation"

export default function RelatedMemes() {
  const { id } = useParams()
  const memeId = Number(id)

  const {
    data: relatedMemes,
    isLoading,
    error
  } = useMemeRelatedQuery(memeId, {
    count: 6 // 관련 밈 6개 표시
  })

  if (isLoading) {
    return (
      <section className="w-full">
        <h2 className="mb-4 text-h2-sb text-gray-scale-100">이런 밈은 어때요?</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-48 animate-pulse rounded-lg bg-gray-700" />
          ))}
        </div>
      </section>
    )
  }

  if (error || !relatedMemes?.length) {
    return null // 에러나 데이터가 없으면 섹션 자체를 숨김
  }

  return (
    <section className="w-full">
      <h2 className="mb-4 text-h2-sb text-gray-scale-100">이런 밈은 어때요?</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {relatedMemes.map((meme) => (
          <ThumbnailCard
            key={meme.id}
            data={meme}
            onClick={() => {
              window.location.href = `/detail/${meme.id}`
            }}
          />
        ))}
      </div>
    </section>
  )
}
