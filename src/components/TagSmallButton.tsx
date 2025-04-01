import { cn } from "@/utils/cn"
import type { ButtonHTMLAttributes } from "react"
import Button from "./Button"

interface Params extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  variant?: "default" | "colored"
}

export default function TagSmallButton({ title, variant = "default", ...buttonProps }: Params) {
  return (
    <Button
      {...buttonProps}
      className={cn(
        "w-fit rounded-[8px] bg-gray-scale-700 p-[8px] text-h3-m",
        variant === "colored" ? "border border-primary-400 text-primary-300" : "text-gray-scale-200",
        buttonProps.className
      )}
    >
      <p>{title}</p>
    </Button>
  )
}
