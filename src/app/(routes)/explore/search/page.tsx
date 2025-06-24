import Sidebar from "@/components/Sidebar"
import SearchContents from "./components/SearchContents"

interface SearchParams {
  keyword?: string
}

interface SearchPageProps {
  searchParams: Promise<SearchParams>
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { keyword } = await searchParams

  return (
    <section className="my-[32px] lg:my-[60px]">
      <section className="flex justify-center lg:justify-between">
        <Sidebar />
        <SearchContents keyword={keyword} />
      </section>
    </section>
  )
}
