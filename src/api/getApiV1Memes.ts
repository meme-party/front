import { fetcher } from "@/api/fetcher"
import { ApiV1MemesListRequest } from "@/openapi/apis/ApiApi"
import { PaginatedMemeList } from "@/openapi/models/PaginatedMemeList"
import { type SearchParamsOption } from "ky"

export const getApiV1Memes = (params?: ApiV1MemesListRequest) => {
  return fetcher.get<PaginatedMemeList>("api/v1/memes", { searchParams: params as SearchParamsOption })
}
