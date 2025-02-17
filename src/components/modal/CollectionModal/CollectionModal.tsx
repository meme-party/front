import { IoIosArrowBack, IoMdClose } from "react-icons/io"
import CollectionList from "./CollectionList"
import { useState } from "react"
import CollectionCreate from "./CollectionCreate"
type Props = {
  onCancel: () => void
}

export default function CollectionModal({ onCancel }: Props) {
  const [isCreateMode, setIsCreateMode] = useState(false)

  return (
    <div className="flex min-h-[600px] w-[720px] flex-col gap-[32px] rounded-lg bg-gray-scale-800 stroke-primary-300 stroke-[1px] px-[24px] py-[36px]">
      <div className="flex justify-between">
        <div onClick={() => setIsCreateMode(false)} className="cursor-pointer">
          <IoIosArrowBack />
        </div>
        <div>컬렉션 추가</div>
        <div onClick={() => onCancel()} className="cursor-pointer">
          <IoMdClose />
        </div>
      </div>
      <div className="flex flex-1 gap-6">
        <div className="w-64 flex-1 rounded-xl bg-black"></div>
        <div className="flex flex-1 flex-col justify-between">
          {isCreateMode ? <CollectionCreate /> : <CollectionList onCreate={() => setIsCreateMode(true)} />}
        </div>
      </div>
    </div>
  )
}
