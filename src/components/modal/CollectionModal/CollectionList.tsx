import { useGetApiV1BookmarksQuery } from "@/api/react-query/useGetApiV1BookmarksQuery"
import Button from "@/components/Button"
import { cn } from "@/utils/cn"
import { Plus } from "lucide-react"

type Props = {
  onCreate: () => void
  bookmarkedIds?: Array<number>
}

export default function CollectionList({ onCreate, bookmarkedIds }: Props) {
  // Todo 무한스크롤 구현 필요
  const { data: bookmarks } = useGetApiV1BookmarksQuery({
    perPage: 100
  })

  // const { mutateAsync } = usePostApiV1Bookmarkings()

  return (
    <div className="flex h-full flex-col">
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
              bookmarkedIds?.includes(collection.id) ? "bg-primary-400 text-gray-scale-100" : "text-gray-scale-400"
            )}
          >
            <p>{collection.title}</p>
          </div>
        ))}
      </div>

      <div className="mt-[24px] flex shrink-0 items-center justify-end gap-[24px]">
        <p className="text-h2-sb text-primary-300">메모 추가</p>
        <Button className="h-[40px] w-[148px] bg-primary-400 p-0">
          <p className="text-h1-m text-gray-100">완료</p>
        </Button>
      </div>
    </div>
  )
}
