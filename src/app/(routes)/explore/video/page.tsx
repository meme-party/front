import Sidebar from "@/components/Sidebar"
import VideoContents from "./components/VideoContents"

export default function VideoPage() {
  return (
    <section className="my-[32px] lg:my-[60px]">
      <section className="flex justify-center lg:justify-between">
        <Sidebar />
        <VideoContents />
      </section>
    </section>
  )
}
