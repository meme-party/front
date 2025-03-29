import Sidebar from "@/components/Sidebar"
import ExploreContents from "./components/ExploreContents"

export default function ExplorePage() {
  // const { data, fetchNextPage } = useGetApiV1MemesInfiniteQuery()

  return (
    <section className="my-[32px] lg:my-[60px]">
      <section className="flex justify-center lg:justify-between">
        <Sidebar />
        <ExploreContents />
      </section>
    </section>
  )
}
