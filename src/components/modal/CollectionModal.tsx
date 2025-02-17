import { IoMdClose, IoMdAdd, IoIosArrowBack } from "react-icons/io"
import Button from "../Button"
type Props = {
  onCancel: () => voi본
}

const Collections = ["컬렉션1", "컬렉션2", "컬렉션3", "컬렉션4"]
export default function CollectionModal({ onCancel }: Props) {
  return (
    <div className="flex min-h-[528px] w-[672px] flex-col gap-2">
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
        <div className="flex flex-1 flex-col justify-between pt-[28px]">
          <div className="flex flex-col gap-[40px]">
            <Button className="bg-gray-scale-700 px-6 text-primary-300">
              <div className="flex content-center gap-2">
                <p className="text-sm">컬랙션 추가</p>
                <p className="object-center">
                  <IoMdAdd />
                </p>
              </div>
            </Button>
            <div>
              <div className="border-b-[1px] border-gray-scale-700 px-[8px] py-[8px]">기본</div>
              {Collections.map((collection, idx) => (
                <div className="border-b-[1px] border-gray-scale-700 p-[8px] py-[16px]" key={idx}>
                  <p className="">{collection}</p>
                </div>
              ))}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
