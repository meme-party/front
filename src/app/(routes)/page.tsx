"use client"
import { getUser, verifyToken } from "@/api/user"
import useDidMountEffect from "../hooks/useDidMoutEffect"

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
    <section>
      <div className="h-[100px] w-[100px] bg-primary-300" />
      <div className="h-[100px] w-[100px] bg-primary-400" />
      <div className="h-[100px] w-[100px] bg-primary-500" />
      <div className="h-[100px] w-[100px] bg-primary-600" />
    </section>
  )
}
