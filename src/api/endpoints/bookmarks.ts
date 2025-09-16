import { fetcher } from "@/api/core/fetcher"
import type {
  Bookmark,
  PaginatedBookmarkList,
  ApiV1BookmarksListRequest,
  Bookmarking,
  PaginatedBookmarkingList,
  ApiV1BookmarksBookmarkingsListRequest,
  BookmarkingSyncRequest
} from "@/openapi"
import type { SearchParamsOption } from "ky"

export const bookmarksApi = {
  // GET /api/v1/bookmarks/
  getList: (params?: ApiV1BookmarksListRequest) =>
    fetcher.get<PaginatedBookmarkList>("api/v1/bookmarks/", {
      searchParams: params as SearchParamsOption
    }),

  // GET /api/v1/bookmarks/{id}/
  getById: (id: string | number) => fetcher.get<Bookmark>(`api/v1/bookmarks/${id}/`),

  // POST /api/v1/bookmarks/
  create: (data: { name: string; description?: string }) => fetcher.post<Bookmark>("api/v1/bookmarks/", { json: data }),

  // PATCH /api/v1/bookmarks/{id}/
  update: (id: string | number, data: { name?: string; description?: string }) =>
    fetcher.patch<Bookmark>(`api/v1/bookmarks/${id}/`, { json: data }),

  // DELETE /api/v1/bookmarks/{id}/
  delete: (id: string | number) => fetcher.delete<void>(`api/v1/bookmarks/${id}/`),

  // GET /api/v1/bookmarks/{bookmark_pk}/bookmarkings/
  getBookmarkings: (bookmarkPk: number, params?: Omit<ApiV1BookmarksBookmarkingsListRequest, "bookmarkPk">) =>
    fetcher.get<PaginatedBookmarkingList>(`api/v1/bookmarks/${bookmarkPk}/bookmarkings/`, {
      searchParams: params as SearchParamsOption
    }),

  // GET /api/v1/bookmarks/{bookmark_pk}/bookmarkings/{id}/
  getBookmarkingById: (bookmarkPk: number, id: number) =>
    fetcher.get<Bookmarking>(`api/v1/bookmarks/${bookmarkPk}/bookmarkings/${id}/`)
} as const

export const bookmarkingsApi = {
  // POST /api/v1/bookmarkings/
  sync: (data: BookmarkingSyncRequest) => fetcher.post("api/v1/bookmarkings/", { json: data }),

  // DELETE /api/v1/bookmarkings/{bookmarking_id}
  delete: (bookmarkingId: number) => fetcher.delete<void>(`api/v1/bookmarkings/${bookmarkingId}`)
} as const
