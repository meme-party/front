"use client"

import { cn } from "@/utils/cn"
import type { TextareaHTMLAttributes } from "react"

export default function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <section className="relative flex w-full items-center">
      <textarea
        {...props}
        className={cn(
          "w-full resize-none rounded-[16px] border border-primary-400 bg-gray-scale-800 px-[16px] py-[12px] text-h3-r text-gray-scale-100 outline-none placeholder:text-gray-scale-400",
          props.className
        )}
      />
    </section>
  )
}
