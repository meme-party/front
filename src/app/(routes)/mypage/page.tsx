"use client"
import { useState } from "react"
import MyFavorite from "./components/MyFavorite"
import MyProfile from "./components/MyProfile"
import AccountSetting from "./components/AccountSetting"
import { ChevronLeft, ArrowRight } from "lucide-react"
import Button from "@/components/Button"

export default function MyPage() {
  const [isSetting, setIsSetting] = useState<boolean>(false)
  return (
    <>
      <section className="flex w-full max-w-[712px] flex-col gap-[32px] lg:mt-[80px]">
        {isSetting && (
          <div className="flex cursor-pointer gap-[8px] text-h3-r text-primary-400" onClick={() => setIsSetting(false)}>
            <ChevronLeft />
            <p>이전으로</p>
          </div>
        )}
        <MyProfile onSettingClick={() => setIsSetting(true)} />
        {isSetting ? <AccountSetting /> : <MyFavorite />}
        {!isSetting && (
          <div className="flex w-full justify-end">
            <Button className="bg-primary-300 px-[24px] py-[12px]">
              <div className="flex gap-[24px] text-black">
                <p>서랍에서 자세히 보기</p>
                <ArrowRight />
              </div>
            </Button>
          </div>
        )}
      </section>
      <section className="hidden lg:flex" />
    </>
  )
}
