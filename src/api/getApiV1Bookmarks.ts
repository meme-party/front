import { fetcher } from "@/api/fetcher"
import { ApiV1BookmarksListRequest } from "@/openapi/apis/ApiApi"
import { PaginatedBookmarkList } from "@/openapi/models/PaginatedBookmarkList"
import { type SearchParamsOption } from "ky"

export const getApiV1Bookmarks = (params?: ApiV1BookmarksListRequest) => {
  return fetcher.get<PaginatedBookmarkList>("api/v1/bookmarks", {
    searchParams: params as SearchParamsOption
  })
}
