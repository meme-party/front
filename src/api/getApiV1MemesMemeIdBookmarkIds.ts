import { fetcher } from "@/api/fetcher"
import { ApiV1MemesBookmarkIdsRetrieve200Response } from "@/openapi/models/ApiV1MemesBookmarkIdsRetrieve200Response"

export const getApiV1MemesMemeIdBookmarkIds = (id: string | number) => {
  return fetcher.get<ApiV1MemesBookmarkIdsRetrieve200Response>(`api/v1/memes/${id}/bookmark_ids`)
}
