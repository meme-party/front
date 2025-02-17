import Button from "@/components/Button"
import Textarea from "@/components/Textarea"

export default function CollectionCreate() {
  return (
    <>
      <div className="flex flex-col gap-[16px]">
        <p>컬렉션 이름</p>
        <Textarea placeholder="컬렉션 이름을 입력해주세요" rows={1}></Textarea>
      </div>
      <div className="flex items-center justify-end">
        <Button className="h-[40px] w-[148px] bg-gray-scale-700 p-0">
          <p className="text-h1-m text-gray-100">완료</p>
        </Button>
      </div>
    </>
  )
}
