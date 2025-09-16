import BackButton from "@/app/(routes)/detail/[id]/components/BackButton"
import MemeDetailBox from "@/components/MemeDetailBox"
import RelatedMemes from "@/components/RelatedMemes"

type Params = Promise<{ id: string }>

export default async function DetailPage({ params }: { params: Params }) {
  const { id } = await params
  console.log("id", id)

  return (
    <section className="flex justify-center">
      <section className="flex w-full max-w-[712px] flex-col gap-[32px]">
        <BackButton />
        <MemeDetailBox />
        {/* 🎯 관련 밈 추가 */}
        <RelatedMemes />
      </section>
    </section>
  )
}
