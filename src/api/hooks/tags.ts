import { createResourceHooks, createQueryKeyFactory } from "@/api/core/createResourceHooks"
import { tagsApi } from "@/api/endpoints/tags"
import { useQuery } from "@tanstack/react-query"
import type {
  Tag,
  ApiV1TagsListRequest,
  ApiV1TagsByFirstLetterListRequest,
  ApiV1TagsFavoriteListRequest,
  PaginatedTagList
} from "@/openapi"

// 🔑 Query Keys
export const tagKeys = createQueryKeyFactory("tags")

// 🏭 기본 CRUD hooks (읽기 전용)
export const {
  useListQuery: useTagsQuery,
  useDetailQuery: useTagDetailQuery
  // create, update, delete는 없음 (읽기 전용)
} = createResourceHooks<
  Tag,
  ApiV1TagsListRequest,
  never,
  never,
  PaginatedTagList // 실제 OpenAPI 타입 사용
>({
  resourceName: "tags",
  api: tagsApi,
  queryKeys: tagKeys
})

// 🎯 특별한 태그 관련 hooks

// 첫글자별 태그 그룹 조회
export const useTagsByFirstLetterQuery = (params?: ApiV1TagsByFirstLetterListRequest) =>
  useQuery({
    queryKey: [...tagKeys.all, "by-first-letter", params],
    queryFn: () => tagsApi.getByFirstLetter(params)
  })

// 인기 태그 조회
export const useTagsFavoriteQuery = (params?: ApiV1TagsFavoriteListRequest) =>
  useQuery({
    queryKey: [...tagKeys.all, "favorite", params],
    queryFn: () => tagsApi.getFavorite(params)
  })

// 태그 첫글자 목록 조회
export const useTagsFirstLettersQuery = () =>
  useQuery({
    queryKey: [...tagKeys.all, "first-letters"],
    queryFn: () => tagsApi.getFirstLetters(),
    staleTime: 10 * 60 * 1000 // 10분간 캐시 유지 (자주 변하지 않는 데이터)
  })

// 📱 편의용 hooks

// 특정 카테고리의 태그들
export const useTagsByCategoryQuery = (categoryId: number, params?: Omit<ApiV1TagsListRequest, "category">) =>
  useTagsQuery(
    {
      category: categoryId,
      ...params
    },
    {
      enabled: !!categoryId
    }
  )

// 특정 첫글자의 태그들
export const useTagsByFirstLetterFilterQuery = (
  firstLetter: string,
  params?: Omit<ApiV1TagsListRequest, "firstLetter">
) =>
  useTagsQuery(
    {
      firstLetter,
      ...params
    },
    {
      enabled: !!firstLetter
    }
  )

// 태그 검색
export const useSearchTagsQuery = (search: string, params?: Omit<ApiV1TagsListRequest, "search">) =>
  useTagsQuery(
    {
      search,
      ...params
    },
    {
      enabled: !!search && search.length > 0
    }
  )

// 트렌드 태그들 (홈페이지용)
export const useTrendingTagsQuery = (count = 10) =>
  useTagsByFirstLetterQuery({
    count,
    orderBy: "name" // 또는 인기도 순
  })

// 모든 태그 (페이지네이션 없이)
export const useAllTagsQuery = () =>
  useTagsQuery({
    perPage: 1000 // 충분히 큰 수
  })
