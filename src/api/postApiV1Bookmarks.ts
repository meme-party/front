import { fetcher } from "@/api/fetcher"
import { Bookmark } from "@/openapi/models/Bookmark"
export const postApiV1Bookmarks = (payload: { title: string }) => {
  return fetcher.post<Bookmark>(`api/v1/bookmarks/`, { json: payload })
}
