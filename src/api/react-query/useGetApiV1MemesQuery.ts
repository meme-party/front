import { InfiniteData, useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { ApiV1MemesListRequest } from "@/openapi/apis/ApiApi" // 요청 파라미터 타입
import { PaginatedMemeList } from "@/openapi/models/PaginatedMemeList" // 응답 타입
import { getApiV1Memes } from "../getApiV1Memes"

export const useGetApiV1MemesQuery = (params?: ApiV1MemesListRequest) => {
  return useQuery<PaginatedMemeList, Error>({
    queryKey: ["memes", params],
    queryFn: () => getApiV1Memes(params)
  })
}

export const useGetApiV1MemesInfiniteQuery = (params?: ApiV1MemesListRequest) => {
  return useInfiniteQuery<PaginatedMemeList, Error, InfiniteData<PaginatedMemeList>>({
    queryKey: ["memes", params],
    queryFn: ({ pageParam = 1 }) => {
      const updatedParams: ApiV1MemesListRequest = {
        ...params,
        page: pageParam as number
      }
      return getApiV1Memes(updatedParams)
    },
    getNextPageParam: (lastPage) => {
      if (!!lastPage.next) {
        const url = new URL(lastPage.next)
        const nextPage = url.searchParams.get("page")
        return nextPage ? Number(nextPage) : undefined
      }
      return undefined
    },
    initialPageParam: 1
  })
}
