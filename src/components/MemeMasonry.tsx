"use client"
import { PaginatedMemeList } from "@/openapi/models/PaginatedMemeList"
import { FetchNextPageOptions, InfiniteData, InfiniteQueryObserverResult } from "@tanstack/react-query"
import Image from "next/image"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

interface Params {
  data?: InfiniteData<PaginatedMemeList, unknown> | undefined
  fetchNextPage: (
    options?: FetchNextPageOptions
  ) => Promise<InfiniteQueryObserverResult<InfiniteData<PaginatedMemeList, unknown>, Error>>
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
      // fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  if (isLoading) return <section className="h-[100vh] bg-red-50" />

  return (
    <section className="relative flex items-center justify-center">
      <section className="w-full columns-2 break-inside-avoid gap-[8px] sm:columns-3">
        {data?.pages?.map((page, pageIndex) => (
          <div key={pageIndex} className="mb-[8px]">
            {page.results.map((result) => (
              <div className="relative mb-[8px]" key={result.id}>
                <Image src={"/cat.png"} width={224} height={0} alt={result.title} className="object-contain" />
              </div>
            ))}
          </div>
        ))}
      </section>
      {!isFetchingNextPage && (
        <div ref={ref} className="pointer-events-none absolute bottom-[400px] h-[4px] w-full opacity-0" />
      )}
    </section>
  )
}
