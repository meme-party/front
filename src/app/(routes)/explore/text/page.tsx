import Sidebar from "@/components/Sidebar"
import TextContents from "./components/TextContents"

export default function TextPage() {
  return (
    <section className="my-[32px] lg:my-[60px]">
      <section className="flex justify-center lg:justify-between">
        <Sidebar />
        <TextContents />
      </section>
    </section>
  )
}
