"use client"
import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function BackButton() {
  const router = useRouter()
  return (
    <button className="flex w-fit items-center gap-[8px] py-[8px] text-gray-scale-400" onClick={() => router.back()}>
      <ChevronLeft />
      <p>이전으로</p>
    </button>
  )
}
