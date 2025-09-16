import { fetcher } from "@/api/core/fetcher"
import type { Meme, PaginatedMemeList, ApiV1MemesListRequest, ApiV1MemesRelatedListRequest } from "@/openapi"
import type { SearchParamsOption } from "ky"

export const memesApi = {
  // GET /api/v1/memes
  getList: (params?: ApiV1MemesListRequest) =>
    fetcher.get<PaginatedMemeList>("api/v1/memes", {
      searchParams: params as SearchParamsOption
    }),

  // GET /api/v1/memes/{id}
  getById: (id: string | number) => fetcher.get<Meme>(`api/v1/memes/${id}`),

  // GET /api/v1/memes/{meme_id}/related
  getRelated: (memeId: number, params?: Omit<ApiV1MemesRelatedListRequest, "memeId">) =>
    fetcher.get<Meme[]>(`api/v1/memes/${memeId}/related`, {
      searchParams: params as SearchParamsOption
    })

  // 밈은 읽기 전용이므로 create, update, delete는 undefined
  // create, update, delete 제거 (선택적으로 만들었으므로)
} as const
