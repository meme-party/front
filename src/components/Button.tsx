import { cn } from "@/utils/cn"
import type { ButtonHTMLAttributes } from "react"
import { ReactNode } from "react"

interface Params extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export default function Button({ children, ...buttonProps }: Params) {
  return (
    <button
      {...buttonProps}
      className={cn("w-fit rounded-[8px] bg-primary-400 p-[8px] text-gray-scale-900", buttonProps.className)}
    >
      {children}
    </button>
  )
}
