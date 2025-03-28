import { getUser, verifyToken } from "@/api/user"
import useDidMountEffect from "@/app/hooks/useDidMountEffect"
import Sidebar from "@/components/Sidebar"

export default function Home() {
  useDidMountEffect(() => {
    verifyToken().then((res) => {
      console.log("token verify", res)
    })
    getUser().then((res) => {
      console.log("user", res)
    })
  }, [])
  return (
    <section className="my-[60px]">
      <section className="flex justify-center lg:justify-between">
        <Sidebar />
        <section className="hidden lg:flex" />
      </section>
    </section>
  )
}
