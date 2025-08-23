import { postApiV1Bookmarks } from "@/api/postApiV1Bookmarks"
import { Bookmark } from "@/openapi/models/Bookmark"
import { useMutation } from "@tanstack/react-query"

export const usePostApiV1Bookmarks = () => {
  return useMutation<Bookmark, Error, { title: string }>({
    mutationFn: (payload) => postApiV1Bookmarks(payload)
  })
}
