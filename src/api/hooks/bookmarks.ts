import { createResourceHooks, createQueryKeyFactory } from "@/api/core/createResourceHooks"
import { bookmarksApi, bookmarkingsApi } from "@/api/endpoints/bookmarks"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import type {
  Bookmark,
  Bookmarking,
  ApiV1BookmarksListRequest,
  ApiV1BookmarksBookmarkingsListRequest,
  BookmarkingSyncRequest,
  PaginatedBookmarkList
} from "@/openapi"

// 🔑 Query Keys
export const bookmarkKeys = createQueryKeyFactory("bookmarks")
export const bookmarkingKeys = createQueryKeyFactory("bookmarkings")

// 🏭 북마크 CRUD hooks
export const {
  useListQuery: useBookmarksQuery,
  useDetailQuery: useBookmarkDetailQuery,
  useCreateMutation: useCreateBookmarkMutation,
  useUpdateMutation: useUpdateBookmarkMutation,
  useDeleteMutation: useDeleteBookmarkMutation
} = createResourceHooks<
  Bookmark,
  ApiV1BookmarksListRequest,
  { name: string; description?: string },
  { name?: string; description?: string },
  PaginatedBookmarkList
>({
  resourceName: "bookmarks",
  api: bookmarksApi,
  queryKeys: bookmarkKeys
})

// 🎯 북마킹 관련 hooks

// 북마크 내 북마킹 목록 조회
export const useBookmarkingsQuery = (
  bookmarkPk: number,
  params?: Omit<ApiV1BookmarksBookmarkingsListRequest, "bookmarkPk">
) =>
  useQuery({
    queryKey: [...bookmarkKeys.all, "bookmarkings", bookmarkPk, params],
    queryFn: () => bookmarksApi.getBookmarkings(bookmarkPk, params),
    enabled: !!bookmarkPk
  })

// 특정 북마킹 조회
export const useBookmarkingDetailQuery = (bookmarkPk: number, bookmarkingId: number) =>
  useQuery({
    queryKey: [...bookmarkKeys.all, "bookmarkings", bookmarkPk, "detail", bookmarkingId],
    queryFn: () => bookmarksApi.getBookmarkingById(bookmarkPk, bookmarkingId),
    enabled: !!bookmarkPk && !!bookmarkingId
  })

// 🔄 북마킹 동기화 (핵심 기능!)
export const useBookmarkingSyncMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: BookmarkingSyncRequest) => bookmarkingsApi.sync(data),
    onSuccess: (_, variables) => {
      // 🔄 관련 캐시들 무효화
      queryClient.invalidateQueries({ queryKey: bookmarkKeys.all })
      queryClient.invalidateQueries({ queryKey: bookmarkingKeys.all })

      // 🎯 특정 북마크의 북마킹 목록 무효화
      if (variables.bookmarkIds) {
        variables.bookmarkIds.forEach((bookmarkId) => {
          queryClient.invalidateQueries({
            queryKey: [...bookmarkKeys.all, "bookmarkings", bookmarkId]
          })
        })
      }

      console.log("✅ 북마킹 동기화 성공")
    },
    onError: (error) => {
      console.error("❌ 북마킹 동기화 실패:", error)
    }
  })
}

// 🗑️ 북마킹 삭제
export const useDeleteBookmarkingMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (bookmarkingId: number) => bookmarkingsApi.delete(bookmarkingId),
    onSuccess: () => {
      // 🔄 관련 캐시들 무효화
      queryClient.invalidateQueries({ queryKey: bookmarkKeys.all })
      queryClient.invalidateQueries({ queryKey: bookmarkingKeys.all })

      console.log("✅ 북마킹 삭제 성공")
    },
    onError: (error) => {
      console.error("❌ 북마킹 삭제 실패:", error)
    }
  })
}

// 📱 편의용 hooks

// 내 북마크 목록
export const useMyBookmarksQuery = (params?: ApiV1BookmarksListRequest) => useBookmarksQuery(params)

// 특정 사용자의 공개 북마크 (추후 확장용)
export const useUserBookmarksQuery = (userId: number, params?: ApiV1BookmarksListRequest) =>
  useBookmarksQuery(
    {
      ...params
    },
    {
      enabled: !!userId
    }
  )

// 북마크 검색
export const useSearchBookmarksQuery = (search: string, params?: Omit<ApiV1BookmarksListRequest, "search">) =>
  useBookmarksQuery(
    {
      search,
      ...params
    },
    {
      enabled: !!search && search.length > 0
    }
  )

// 🎯 특정 밈이 포함된 북마크들 조회 (클라이언트 사이드 필터링)
export const useBookmarksContainingMemeQuery = (memeId: number) => {
  const { data: bookmarks } = useBookmarksQuery()

  return useQuery({
    queryKey: [...bookmarkKeys.all, "containing-meme", memeId],
    queryFn: async () => {
      if (!bookmarks?.results) return []

      // 각 북마크의 북마킹들을 확인해서 해당 밈이 포함된 북마크들 찾기
      const bookmarksWithMeme = []

      for (const bookmark of bookmarks.results) {
        try {
          const bookmarkings = await bookmarksApi.getBookmarkings(bookmark.id)
          const containsMeme = bookmarkings.results.some((bookmarking: Bookmarking) => bookmarking.meme?.id === memeId)

          if (containsMeme) {
            bookmarksWithMeme.push(bookmark)
          }
        } catch (error) {
          console.error(`북마크 ${bookmark.id} 조회 실패:`, error)
        }
      }

      return bookmarksWithMeme
    },
    enabled: !!memeId && !!bookmarks?.results
  })
}

// 🚀 낙관적 업데이트 hooks

// 밈을 북마크에 즉시 추가 (낙관적 업데이트)
export const useOptimisticAddToBookmarkMutation = () => {
  const queryClient = useQueryClient()
  const syncMutation = useBookmarkingSyncMutation()

  return useMutation({
    mutationFn: async ({ memeId, bookmarkIds }: { memeId: number; bookmarkIds: number[] }) => {
      return syncMutation.mutateAsync({
        memeId: memeId,
        bookmarkIds: bookmarkIds
      })
    },

    // 🏃‍♂️ 서버 요청 전에 UI 먼저 업데이트
    onMutate: async ({ bookmarkIds }) => {
      // 진행 중인 쿼리들 취소
      for (const bookmarkId of bookmarkIds) {
        await queryClient.cancelQueries({
          queryKey: [...bookmarkKeys.all, "bookmarkings", bookmarkId]
        })
      }

      // 이전 데이터 백업
      const previousData = bookmarkIds.map((bookmarkId) => ({
        bookmarkId,
        data: queryClient.getQueryData([...bookmarkKeys.all, "bookmarkings", bookmarkId])
      }))

      // 낙관적 업데이트: 각 북마크에 밈 추가
      // (실제 구현에서는 정확한 데이터 구조에 맞춰 수정 필요)

      return { previousData }
    },

    // ❌ 실패 시 롤백
    onError: (err, variables, context) => {
      if (context?.previousData) {
        context.previousData.forEach(({ bookmarkId, data }) => {
          queryClient.setQueryData([...bookmarkKeys.all, "bookmarkings", bookmarkId], data)
        })
      }
    },

    // ✅ 완료 시 최신 데이터로 갱신
    onSettled: (data, error, { bookmarkIds }) => {
      bookmarkIds.forEach((bookmarkId) => {
        queryClient.invalidateQueries({
          queryKey: [...bookmarkKeys.all, "bookmarkings", bookmarkId]
        })
      })
    }
  })
}
