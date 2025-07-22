import { useQuery, useInfiniteQuery, InfiniteData } from "@tanstack/react-query"
import { getApiV1Bookmarks } from "@/api/getApiV1Bookmarks"
import { ApiV1BookmarksListRequest } from "@/openapi/apis/ApiApi"
import { PaginatedBookmarkList } from "@/openapi/models/PaginatedBookmarkList"

export const useGetApiV1BookmarksQuery = (params?: ApiV1BookmarksListRequest) => {
  return useQuery<PaginatedBookmarkList, Error>({
    queryKey: ["/api/v1/bookmarks", params],
    queryFn: () => getApiV1Bookmarks(params)
  })
}

export const useGetApiV1BookmarksInfiniteQuery = (params?: ApiV1BookmarksListRequest) => {
  return useInfiniteQuery<PaginatedBookmarkList, Error, InfiniteData<PaginatedBookmarkList>>({
    queryKey: ["/api/v1/bookmarks", params],
    queryFn: ({ pageParam = 1 }) => {
      const updatedParams: ApiV1BookmarksListRequest = {
        ...params,
        page: pageParam as number
      }
      return getApiV1Bookmarks(updatedParams)
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.next) {
        const url = new URL(lastPage.next)
        const nextPage = url.searchParams.get("page")
        return nextPage ? Number(nextPage) : undefined
      }
      return undefined
    },
    initialPageParam: 1
  })
}
