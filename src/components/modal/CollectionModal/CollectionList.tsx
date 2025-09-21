import { useGetApiV1BookmarksQuery } from "@/api/react-query/useGetApiV1BookmarksQuery"
import { usePostApiV1Bookmarkings } from "@/api/react-query/usePostApiV1Bookmarkings"
import Button from "@/components/Button"
import { BookmarkingSyncRequest } from "@/openapi/models/BookmarkingSyncRequest"
import { cn } from "@/utils/cn"
import { Plus } from "lucide-react"
import { useForm } from "react-hook-form"

type Props = {
  id?: number
  onCreate: () => void
  bookmarkedIds?: Array<number>
}

export default function CollectionList({ id, onCreate, bookmarkedIds }: Props) {
  // Todo 무한스크롤 구현 필요
  const { data: bookmarks } = useGetApiV1BookmarksQuery({
    perPage: 100
  })

  const { mutateAsync } = usePostApiV1Bookmarkings()

  const { watch, setValue, handleSubmit } = useForm<BookmarkingSyncRequest>({
    values: {
      memeId: id as number,
      bookmarkIds: bookmarkedIds ?? []
    }
  })

  const selectedBookmarkIds = watch("bookmarkIds")

  const submit = async (data: BookmarkingSyncRequest) => {
    data.withoutBookmark = data.bookmarkIds?.length === 0 ? true : false
    await mutateAsync(data)
  }

  return (
    <form className="flex h-full flex-col" onSubmit={handleSubmit(submit)}>
      <div className="mt-[28px] flex shrink-0 items-center gap-[8px]">
        <Button className="bg-gray-scale-700 px-[24px] py-[10px] text-primary-300" onClick={onCreate}>
          <div className="flex items-center gap-[20px] text-h3-sb">
            <p>컬랙션 추가</p>
            <Plus fontSize={"14px"} stroke="3" />
          </div>
        </Button>
      </div>

      <div className="mt-[24px] flex-1 overflow-y-auto pr-[4px]">
        {bookmarks?.results.map((collection) => (
          <div
            key={collection.id}
            className={cn(
              "my-[8px] rounded-[8px] border-b-[1px] border-gray-scale-700 p-[8px] text-h2-m",
              selectedBookmarkIds.includes(collection.id) ? "bg-primary-400 text-gray-scale-100" : "text-gray-scale-400"
            )}
            onClick={() => {
              // 값이 들어있으면 빼고, 값이 없으면 넣는 Toggle 형식
              const newValue = selectedBookmarkIds.includes(collection.id)
                ? selectedBookmarkIds.filter((id) => id !== collection.id)
                : [...selectedBookmarkIds, collection.id]
              setValue("bookmarkIds", newValue, { shouldValidate: true })
            }}
          >
            <p>{collection.title}</p>
          </div>
        ))}
      </div>

      <div className="mt-[24px] flex shrink-0 items-center justify-end gap-[24px]">
        <p className="text-h2-sb text-primary-300">메모 추가</p>
        <Button type="submit" className="h-[40px] w-[148px] bg-primary-400 p-0">
          <p className="text-h1-m text-gray-100">완료</p>
        </Button>
      </div>
    </form>
  )
}
