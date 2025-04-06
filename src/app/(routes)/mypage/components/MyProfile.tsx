"use client"
import SettingIcon from "@/assets/setting.svg"

export default function MyProfile() {
  return (
    <div className="min-h-[180px] w-full rounded-[12px] bg-gray-scale-700">
      <div className="mx-[48px] my-[28px] flex items-center gap-[32px]">
        <div className="h-[124px] w-[124px] rounded-[152px] bg-gray-scale-800"></div>
        <div className="flex flex-col gap-[24px]">
          <div className="flex items-center gap-[16px]">
            <p className="text-h1-sb">닉네임</p>
            <SettingIcon />
          </div>
          <p className="text-h2-r">카카오 로그인 사용중</p>
        </div>
      </div>
    </div>
  )
}
