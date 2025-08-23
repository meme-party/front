import { useGetApiV1MemesMemeIdBookmarkIdsQuery } from "@/api/react-query/useGetApiV1MemesMemeIdBookmarkIdsQuery"
import { ArrowLeft, X } from "lucide-react"
import { useState } from "react"
import CollectionCreate from "./CollectionCreate"
import CollectionList from "./CollectionList"
type Props = {
  id?: number
  onCancel: () => void
}

export default function CollectionModal({ id, onCancel }: Props) {
  const [isCreateMode, setIsCreateMode] = useState(false)
  // const { data: bookmarks } = useGetApiV1BookmarksQuery()
  const { data: bookmarkedIds } = useGetApiV1MemesMemeIdBookmarkIdsQuery(id)

  return (
    <div className="flex min-h-[600px] w-[720px] flex-col gap-[32px] rounded-[12px] border-[0.5px] border-primary-300 bg-gray-scale-800 px-[24px] py-[36px]">
      <div className="flex justify-between">
        <div onClick={() => setIsCreateMode(false)} className="cursor-pointer">
          {/* <IoIosArrowBack /> */}
          <ArrowLeft />
        </div>
        <div>컬렉션 추가</div>
        <div onClick={() => onCancel()} className="cursor-pointer">
          <X />
        </div>
      </div>
      <div className="flex flex-1 gap-[24px]">
        <div className="w-[264px] flex-1 rounded-[12px] bg-black"></div>
        <div className="flex flex-1 flex-col justify-between">
          {isCreateMode ? (
            <CollectionCreate onCreateSuccess={() => setIsCreateMode(false)} />
          ) : (
            <CollectionList onCreate={() => setIsCreateMode(true)} bookmarkedIds={bookmarkedIds?.bookmarkIds} />
          )}
        </div>
      </div>
    </div>
  )
}
