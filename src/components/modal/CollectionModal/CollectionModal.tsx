import { IoIosArrowBack, IoMdClose } from "react-icons/io"
import CollectionList from "./CollectionList"
type Props = {
  onCancel: () => voi본
}

export default function CollectionModal({ onCancel }: Props) {
  return (
    <div className="flex min-h-[600px] w-[720px] flex-col gap-2 rounded-lg bg-gray-scale-800 stroke-primary-300 stroke-[1px] px-[24px] py-[36px]">
      <div className="flex justify-between">
        <div>
          <IoIosArrowBack />
        </div>
        <div>컬렉션 추가</div>
        <div onClick={() => onCancel()}>
          <IoMdClose />
        </div>
      </div>
      <div className="flex flex-1 gap-6">
        <div className="w-64 flex-1 rounded-xl bg-black"></div>
        <div className="flex flex-1 flex-col justify-between">
          <CollectionList />
        </div>
      </div>
    </div>
  )
}
