import Sidebar from "@/components/Sidebar"

export default function Drawer() {
  return (
    <section className="my-[60px]">
      <section className="flex justify-center lg:justify-between">
        <Sidebar />
        <section className="hidden lg:flex" />
      </section>
    </section>
  )
}
