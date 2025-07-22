import { PaginatedBookmarkingList } from "@/openapi/models/PaginatedBookmarkingList"
import { BookmarkingSyncRequest } from "@/openapi/models/BookmarkingSyncRequest"
import { useMutation } from "@tanstack/react-query"
import { postApiV1Bookmarkings } from "@/api/postApiV1Bookmarkings"

export const usePostApiV1Bookmarkings = () => {
  return useMutation<PaginatedBookmarkingList, Error, BookmarkingSyncRequest>({
    mutationFn: (payload) => postApiV1Bookmarkings(payload)
  })
}
