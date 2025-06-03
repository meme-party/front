"use client"

import SettingButton from "./SettingButton"

export default function AccountSetting() {
  return (
    <div className="flex w-full flex-col gap-[16px]">
      <SettingButton text="로그아웃" />
      <SettingButton text="회원 탈퇴" textColor="text-semantic" />
    </div>
  )
}
