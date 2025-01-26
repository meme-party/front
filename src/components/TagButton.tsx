import { cn } from "@/utils/cn"
import type { ButtonHTMLAttributes } from "react"
import Button from "./Button"

interface Params extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  variant?: "default" | "colored"
}

export default function TagButton({ title, variant = "default", ...buttonProps }: Params) {
  return (
    <Button
      {...buttonProps}
      className={cn(
        "w-fit rounded-lg bg-gray-scale-700 p-2 px-4 text-white",
        variant === "colored" && "border border-primary-400 font-semibold text-primary-300",
        buttonProps.className
      )}
    >
      <p className={cn("font-medium", variant === "colored" && "font-semibold")}>{title}</p>
    </Button>
  )
}
