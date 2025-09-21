import { getApiV1MemesMemeIdBookmarkIds } from "@/api/getApiV1MemesMemeIdBookmarkIds"
import { ApiV1MemesBookmarkIdsRetrieve200Response } from "@/openapi/models/ApiV1MemesBookmarkIdsRetrieve200Response"
import { useQuery } from "@tanstack/react-query"

export const useGetApiV1MemesMemeIdBookmarkIdsQuery = (id: string | number | undefined) => {
  return useQuery<ApiV1MemesBookmarkIdsRetrieve200Response, Error>({
    queryKey: [`/api/v1/memes/${id}/bookmark_ids`],
    queryFn: () => getApiV1MemesMemeIdBookmarkIds(id!),
    enabled: !!id
  })
}
