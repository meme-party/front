import { fetcher } from "@/api/fetcher"
import { PaginatedBookmarkingList } from "@/openapi/models/PaginatedBookmarkingList"
import { BookmarkingSyncRequest } from "@/openapi/models/BookmarkingSyncRequest"

export const postApiV1Bookmarkings = (payload: BookmarkingSyncRequest) => {
  return fetcher.post<PaginatedBookmarkingList>(`api/v1/bookmarkings/`, { json: payload })
}
