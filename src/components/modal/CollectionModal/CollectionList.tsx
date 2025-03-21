import Button from "@/components/Button"
import { Plus } from "lucide-react"
const Collections = ["컬렉션1", "컬렉션2", "컬렉션3", "컬렉션4"]
type Props = {
  onCreate: () => void
}

export default function CollectionList({ onCreate }: Props) {
  return (
    <>
      <div className="mt-[28px] flex flex-col gap-[40px]">
        <div className="flex items-center gap-[8px]">
          <Button className="bg-gray-scale-700 px-[20px] py-[10px] text-primary-300">
            <div className="flex items-center gap-[20px] text-h3-sb" onClick={onCreate}>
              <p>컬랙션 추가</p>
              <Plus fontSize={"14px"} stroke="3" />
            </div>
          </Button>
          <p className="text-xs text-gray-scale-400">현재 “컬렉션 1”에 수록되어 있어요!</p>
        </div>
        <div>
          <div className="border-b-[1px] border-gray-scale-700 p-[8px]">기본</div>
          {Collections.map((collection, idx) => (
            <div className="border-b-[1px] border-gray-scale-700 p-[8px] py-[16px]" key={idx}>
              <p className="">{collection}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-end gap-[24px]">
        <p className="text-h2-sb text-primary-300">메모 추가</p>
        <Button className="h-[40px] w-[148px] bg-primary-400 p-0">
          <p className="text-h1-m text-gray-100">완료</p>
        </Button>
      </div>
    </>
  )
}
