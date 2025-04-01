"use client"

import { cn } from "@/utils/cn"
import type { InputHTMLAttributes } from "react"

// interface Params extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <section className="relative flex w-full items-center">
      <input
        {...props}
        className={cn(
          "w-full rounded-[8px] border border-primary-400 bg-gray-scale-800 px-[16px] py-[12px] text-h3-r outline-none placeholder:text-gray-scale-400 md:text-h2-r",
          props.className
        )}
      />
    </section>
  )
}
