import MemeDetailBox from "@/components/MemeDetailBox"
import { ChevronLeft } from "lucide-react"

type Params = Promise<{ id: string }>

export default async function DetailPage({ params }: { params: Params }) {
  const { id } = await params
  console.log("id", id)

  return (
    <section className="flex justify-center">
      <section className="flex w-full max-w-[712px] flex-col">
        <button className="flex w-fit items-center gap-[8px] py-[8px] text-gray-scale-400">
          <ChevronLeft />
          <p>이전으로</p>
        </button>
        <MemeDetailBox />
      </section>
    </section>
  )
}
