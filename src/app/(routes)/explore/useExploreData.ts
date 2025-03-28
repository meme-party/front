"use client"

import { useQuery } from "@tanstack/react-query"
import { fetcher } from "@/api/fetcher"

const fetchExploreData = async () => {
  return fetcher.get("api/v1/memes")
}

export function useExploreData() {
  return useQuery({
    queryKey: ["exploreData"],
    queryFn: fetchExploreData,
    staleTime: 1000 * 60 * 5, // 5분 동안 캐싱 유지
    retry: 1 // 실패 시 한 번만 재시도
  })
}
