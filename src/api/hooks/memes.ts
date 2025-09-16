import { createResourceHooks, createQueryKeyFactory, createInfiniteQueryHook } from "@/api/core/createResourceHooks"
import { memesApi } from "@/api/endpoints/memes"
import { useQuery } from "@tanstack/react-query"
import type { Meme, ApiV1MemesListRequest, PaginatedMemeList, ApiV1MemesRelatedListRequest } from "@/openapi"

// 🔑 Query Keys
export const memeKeys = createQueryKeyFactory("memes")

// 🏭 기본 CRUD hooks (읽기 전용)
export const {
  useListQuery: useMemesQuery,
  useDetailQuery: useMemeDetailQuery
  // create, update, delete는 없음 (읽기 전용)
} = createResourceHooks<
  Meme,
  ApiV1MemesListRequest,
  never,
  never,
  PaginatedMemeList // 실제 OpenAPI 타입 사용
>({
  resourceName: "memes",
  api: memesApi,
  queryKeys: memeKeys
})

// ♾️ 무한 스크롤 hook
export const useMemesInfiniteQuery = createInfiniteQueryHook<ApiV1MemesListRequest, PaginatedMemeList>({
  queryKey: memeKeys.lists(),
  queryFn: memesApi.getList
})

// 🎯 관련 밈 조회 hook
export const useMemeRelatedQuery = (memeId: number, params?: Omit<ApiV1MemesRelatedListRequest, "memeId">) =>
  useQuery({
    queryKey: [...memeKeys.all, "related", memeId, params],
    queryFn: () => memesApi.getRelated(memeId, params),
    enabled: !!memeId
  })

// 📱 편의용 hooks
export const useMemeByIdQuery = (id: string | number) =>
  useMemeDetailQuery(id, {
    enabled: !!id
  })

export const useRecentMemesQuery = (params?: ApiV1MemesListRequest) =>
  useMemesQuery({
    ordering: "-created_at",
    ...params
  })

export const usePopularMemesQuery = (params?: ApiV1MemesListRequest) =>
  useMemesQuery({
    ordering: "-view_count", // 또는 인기도 기준 필드
    ...params
  })

export const useMemesByTypeQuery = (
  type: "Image" | "Video" | "Text" | "Audio",
  params?: Omit<ApiV1MemesListRequest, "type">
) =>
  useMemesQuery({
    type,
    ...params
  })

export const useMemesByTagQuery = (
  tagsCategoryName: string,
  params?: Omit<ApiV1MemesListRequest, "tagsCategoryName">
) =>
  useMemesQuery({
    tagsCategoryName,
    ...params
  })

export const useSearchMemesQuery = (search: string, params?: Omit<ApiV1MemesListRequest, "search">) =>
  useMemesQuery(
    {
      search,
      ...params
    },
    {
      enabled: !!search && search.length > 0
    }
  )
