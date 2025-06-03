import { ApiV1TagsListRequest } from "@/openapi/apis/ApiApi"
import { PaginatedTagList } from "@/openapi/models/PaginatedTagList"
import { useQuery } from "@tanstack/react-query"
import { getApiV1Tags } from "@/api/getApiV1Tags"

export const useGetApiV1TagsQuery = (params?: ApiV1TagsListRequest) => {
  return useQuery<PaginatedTagList, Error>({
    queryKey: ["/api/v1/tags", params],
    queryFn: () => getApiV1Tags(params)
  })
}
