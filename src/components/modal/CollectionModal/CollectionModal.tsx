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
  const { data: bookmarkedIds } = useGetApiV1MemesMemeIdBookmarkIdsQuery(id)

  return (
    <section className="flex h-[600px] w-[720px] flex-col gap-[32px] rounded-[12px] border-[0.5px] border-primary-300 bg-gray-scale-800 px-[24px] py-[36px]">
      <article className="flex shrink-0 items-center justify-between">
        <div onClick={() => setIsCreateMode(false)} className="cursor-pointer">
          <ArrowLeft />
        </div>
        <div>컬렉션 추가</div>
        <div onClick={() => onCancel()} className="cursor-pointer">
          <X />
        </div>
      </article>

      <article className="flex flex-1 gap-[24px] overflow-hidden">
        <div className="h-full w-[264px] shrink-0 rounded-[12px] bg-black" />

        <div className="flex h-full w-full flex-col justify-between overflow-hidden">
          {isCreateMode ? (
            <CollectionCreate onCreateSuccess={() => setIsCreateMode(false)} />
          ) : (
            <CollectionList
              id={id}
              onCreate={() => setIsCreateMode(true)}
              bookmarkedIds={bookmarkedIds?.bookmarkIds ?? []}
            />
          )}
        </div>
      </article>
    </section>
  )
}
