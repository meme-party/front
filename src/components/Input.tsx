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
          "placeholder:text-gray bg-gray-scale-800 w-fit rounded-lg border border-primary-400 p-4 font-semibold outline-none",
          props.className
        )}
      />
    </section>
  )
}
