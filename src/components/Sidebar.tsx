"use client"

import { COLORS } from "@/styles/colors"
import { Grid2X2, House, PanelBottomOpen } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

export default function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "홈", icon: <House color={COLORS.PRIMARY_300} size={30} /> },
    { href: "/explore", label: "탐색", icon: <Grid2X2 color={COLORS.PRIMARY_300} size={30} /> },
    { href: "/drawer", label: "서랍", icon: <PanelBottomOpen color={COLORS.PRIMARY_300} size={30} /> }
  ]

  // 현재 경로에 해당하는 항목 찾기
  const activeItem = navItems.find((item) => item.href === pathname)

  return (
    <section className="hidden flex-shrink-0 flex-col lg:flex">
      <section className="flex flex-col gap-[16px]">
        {activeItem && (
          <Link href={activeItem.href}>
            <article className="flex items-center gap-[12px]">
              {React.cloneElement(activeItem.icon, { size: 48 })}
              <p className="">{activeItem.label}</p>
            </article>
          </Link>
        )}

        {navItems.map(({ href, label, icon }) => (
          <Link key={href} href={href}>
            <article className="ms-[8px] flex items-center gap-[12px]">
              {icon}
              <p>{label}</p>
            </article>
          </Link>
        ))}
      </section>
    </section>
  )
}
