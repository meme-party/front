import { fetcher } from "@/api/fetcher"
import { ApiV1TagsListRequest } from "@/openapi/apis/TagApi"
import { PaginatedTagList } from "@/openapi/models/PaginatedTagList"
import { SearchParamsOption } from "ky"

export const getApiV1Tags = (params?: ApiV1TagsListRequest) => {
  return fetcher.get<PaginatedTagList>(`api/v1/tags`, { searchParams: params as SearchParamsOption })
}
