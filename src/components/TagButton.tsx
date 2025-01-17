import { cn } from "@/utils/cn"
import type { ButtonHTMLAttributes } from "react"
import Button from "./Button"

interface Params extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  selected?: boolean
}

export default function TagButton({ title, selected, ...buttonProps }: Params) {
  return (
    <Button
      className={cn(
        "bg-gray-scale-700 w-fit rounded-lg p-2 px-4 text-white",
        selected && "border border-primary-400 text-primary-300"
      )}
      {...buttonProps}
    >
      <p className="font-medium">{title}</p>
    </Button>
  )
}
