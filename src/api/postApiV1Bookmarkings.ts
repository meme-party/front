import { fetcher } from "@/api/fetcher"
import { BookmarkingSyncRequest, BookmarkingSyncRequestToJSONTyped } from "@/openapi/models/BookmarkingSyncRequest"

export const postApiV1Bookmarkings = (payload: BookmarkingSyncRequest) => {
  return fetcher.post<ReturnType<typeof BookmarkingSyncRequestToJSONTyped>>(`api/v1/bookmarkings/`, { json: payload })
}
