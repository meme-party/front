import Sidebar from "@/components/Sidebar"
import PopularityContents from "./components/PopularityContents"

export default function PopularityPage() {
  return (
    <section className="my-[32px] lg:my-[60px]">
      <section className="flex justify-center lg:justify-between">
        <Sidebar />
        <PopularityContents />
      </section>
    </section>
  )
}
