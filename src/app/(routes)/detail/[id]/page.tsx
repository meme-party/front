import BackButton from "@/app/(routes)/detail/[id]/components/BackButton"
import MemeDetailBox from "@/components/MemeDetailBox"

type Params = Promise<{ id: string }>

export default async function DetailPage({ params }: { params: Params }) {
  const { id } = await params
  console.log("id", id)

  return (
    <section className="flex justify-center">
      <section className="flex w-full max-w-[712px] flex-col">
        <BackButton />
        <MemeDetailBox />
      </section>
    </section>
  )
}
