import { cn } from "@/utils/cn"
import type { ButtonHTMLAttributes } from "react"
import { ReactNode } from "react"

interface Params extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export default function Button({ children, className, ...buttonProps }: Params) {
  return (
    <button className={cn("w-fit rounded-lg bg-primary-400 p-2 font-semibold text-dark", className)} {...buttonProps}>
      {children}
    </button>
  )
}
