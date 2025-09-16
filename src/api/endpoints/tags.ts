import { fetcher } from "@/api/core/fetcher"
import type {
  Tag,
  PaginatedTagList,
  ApiV1TagsListRequest,
  ApiV1TagsByFirstLetterListRequest,
  ApiV1TagsFavoriteListRequest
} from "@/openapi"
import type { SearchParamsOption } from "ky"

export const tagsApi = {
  // GET /api/v1/tags
  getList: (params?: ApiV1TagsListRequest) =>
    fetcher.get<PaginatedTagList>("api/v1/tags", {
      searchParams: params as SearchParamsOption
    }),

  // GET /api/v1/tags/{id} (OpenAPI에는 없지만 일관성을 위해)
  getById: (id: string | number) => fetcher.get<Tag>(`api/v1/tags/${id}`),

  // GET /api/v1/tags/by-first-letter/
  getByFirstLetter: (params?: ApiV1TagsByFirstLetterListRequest) =>
    fetcher.get<Tag[]>("api/v1/tags/by-first-letter/", {
      searchParams: params as SearchParamsOption
    }),

  // GET /api/v1/tags/favorite/
  getFavorite: (params?: ApiV1TagsFavoriteListRequest) =>
    fetcher.get<PaginatedTagList>("api/v1/tags/favorite/", {
      searchParams: params as SearchParamsOption
    }),

  // GET /api/v1/tags/first-letters/
  getFirstLetters: () => fetcher.get<string[]>("api/v1/tags/first-letters/")

  // 태그도 읽기 전용이므로 create, update, delete 제거
} as const
