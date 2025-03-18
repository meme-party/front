import CollectionList from "./CollectionList"
import { useState } from "react"
import CollectionCreate from "./CollectionCreate"
import { ArrowLeft, X } from "lucide-react"
type Props = {
  onCancel: () => void
}

export default function CollectionModal({ onCancel }: Props) {
  const [isCreateMode, setIsCreateMode] = useState(false)

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
          {isCreateMode ? <CollectionCreate /> : <CollectionList onCreate={() => setIsCreateMode(true)} />}
        </div>
      </div>
    </div>
  )
}
