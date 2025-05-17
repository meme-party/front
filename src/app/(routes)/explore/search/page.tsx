import Sidebar from "@/components/Sidebar"
import SearchContents from "./components/SearchContents"

export default function SearchPage() {
  return (
    <section className="my-[32px] lg:my-[60px]">
      <section className="flex justify-center lg:justify-between">
        <Sidebar />
        <SearchContents />
      </section>
    </section>
  )
}
