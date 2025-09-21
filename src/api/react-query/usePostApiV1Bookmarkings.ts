import { postApiV1Bookmarkings } from "@/api/postApiV1Bookmarkings"
import { BookmarkingSyncRequest, BookmarkingSyncRequestToJSONTyped } from "@/openapi/models/BookmarkingSyncRequest"
import { useMutation } from "@tanstack/react-query"

export const usePostApiV1Bookmarkings = () => {
  return useMutation<ReturnType<typeof BookmarkingSyncRequestToJSONTyped>, Error, BookmarkingSyncRequest>({
    mutationFn: (payload) => postApiV1Bookmarkings(payload)
  })
}
