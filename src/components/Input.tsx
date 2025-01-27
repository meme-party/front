"use client"

import { cn } from "@/utils/cn"
import type { InputHTMLAttributes } from "react"

// interface Params extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <section className="relative flex w-fit items-center">
      <input
        {...props}
        className={cn(
          "w-fit rounded-lg border border-primary-400 bg-gray-scale-800 p-4 font-semibold outline-none placeholder:text-gray",
          props.className
        )}
      />
    </section>
  )
}
