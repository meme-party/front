import Sidebar from "@/components/Sidebar"

export default function MyPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="my-[60px]">
      <section className="flex justify-center lg:justify-between">
        <Sidebar />
        {children}
      </section>
    </section>
  )
}
