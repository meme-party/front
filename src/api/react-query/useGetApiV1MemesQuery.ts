import { InfiniteData, useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { PaginatedMemeList } from "@/openapi/models/PaginatedMemeList"
import { getApiV1Memes } from "@/api//getApiV1Memes"
import { ApiV1MemesListRequest } from "@/openapi/apis/MemeApi"

export const useGetApiV1MemesQuery = (params?: ApiV1MemesListRequest) => {
  return useQuery<PaginatedMemeList, Error>({
    queryKey: ["/api/v1/memes", params],
    queryFn: () => getApiV1Memes(params)
  })
}

export const useGetApiV1MemesInfiniteQuery = (params?: ApiV1MemesListRequest) => {
  return useInfiniteQuery<PaginatedMemeList, Error, InfiniteData<PaginatedMemeList>>({
    queryKey: ["/api/v1/memes", params],
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
