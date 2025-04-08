import Sidebar from "@/components/Sidebar"
import ImageContents from "./components/ImageContents"

export default function ImagePage() {
  return (
    <section className="my-[32px] lg:my-[60px]">
      <section className="flex justify-center lg:justify-between">
        <Sidebar />
        <ImageContents />
      </section>
    </section>
  )
}
