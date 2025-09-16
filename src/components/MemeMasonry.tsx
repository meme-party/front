// Todo 텍스트, 비디오 UI 구현

"use client"
import { PaginatedMemeList } from "@/openapi/models/PaginatedMemeList"
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid"
import { FetchNextPageOptions, InfiniteData, InfiniteQueryObserverResult } from "@tanstack/react-query"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import ThumbnailCard from "./ThumbnailCard"
import type { ApiError } from "@/api/core/types"

interface Params {
  data?: InfiniteData<PaginatedMemeList, unknown> | undefined
  fetchNextPage: (
    options?: FetchNextPageOptions
  ) => Promise<InfiniteQueryObserverResult<InfiniteData<PaginatedMemeList, unknown>, ApiError>>
  isLoading?: boolean
  hasNextPage?: boolean
  isFetchingNextPage?: boolean
}

export default function MemeMasonry({ data, fetchNextPage, isLoading, hasNextPage, isFetchingNextPage }: Params) {
  const { ref, inView } = useInView({
    threshold: 1
  })

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  if (isLoading) return <section className="h-[100vh] bg-red-50" />

  return (
    <section className="relative min-h-[100vh]">
      <MasonryInfiniteGrid gap={8} resizeDebounce={100}>
        {data?.pages
          ?.flatMap((page) => page.results)
          .map((result) => (
            <div className="w-[calc(50%_-_4px)] md:w-[calc(33.333%_-_5.3px)]" key={result.id}>
              <ThumbnailCard data={result} key={result.id} />
            </div>
          ))}
      </MasonryInfiniteGrid>
      {!isFetchingNextPage && (
        <div ref={ref} className="pointer-events-none absolute bottom-[200px] h-[4px] w-full bg-red-500 opacity-100" />
      )}
    </section>
  )
}
