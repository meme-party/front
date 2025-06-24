"use client"
import Button from "@/components/Button"
import { COLORS } from "@/styles/colors"
import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Header() {
  // Todo 세션체크해서 닉네임, 버튼 조건부 렌더링
  const router = useRouter()
  return (
    // lg:px-[120px]
    <section className="flex h-[94px] w-full items-end justify-between border-b-[1px] border-b-gray-scale-700 px-[16px] py-[12px] md:h-auto md:items-center md:px-[24px] md:py-[8px]">
      <Link href={"/"}>
        <article className="relative h-[24px] w-[120px]">
          <Image src={"/logo.png"} alt="logo" fill />
        </article>
      </Link>
      <article className="flex flex-row-reverse items-center gap-[24px] md:flex md:flex-row">
        <Link href={"/mypage"}>
          <div className="flex items-center gap-[8px]">
            <div className="relative h-[24px] w-[24px]">
              <Image src={"/cat.png"} alt="profile-image" fill className="rounded-full" />
            </div>
            <p className="hidden text-h3-r md:flex">유저 닉네임이 들어가요</p>
          </div>
        </Link>
        <Search size={24} color={COLORS.PRIMARY} />
        <Button
          className="hidden bg-primary-300 px-[24px] py-[4px] text-h2-sb md:flex"
          onClick={() => router.push("/login")}
        >
          로그인
        </Button>
      </article>
    </section>
  )
}
