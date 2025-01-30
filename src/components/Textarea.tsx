"use client"

import { cn } from "@/utils/cn"
import type { TextareaHTMLAttributes } from "react"

export default function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <section className="relative flex w-fit items-center">
      <textarea
        {...props}
        className={cn(
          "w-fit resize-none rounded-lg border border-primary-400 bg-gray-scale-800 p-4 font-semibold outline-none placeholder:text-gray",
          props.className
        )}
      />
    </section>
  )
}
