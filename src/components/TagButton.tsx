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
        "w-fit rounded-[8px] bg-gray-scale-700 px-[16px] py-[8px]",
        variant === "colored"
          ? "border border-primary-400 text-h2-m text-primary-300"
          : "text-h2-sb text-gray-scale-200",
        buttonProps.className
      )}
    >
      <p className={cn("font-medium", variant === "colored" && "font-semibold")}>{title}</p>
    </Button>
  )
}
