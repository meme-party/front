import { cn } from "@/utils/cn"
import type { ButtonHTMLAttributes } from "react"

interface Params extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  selected?: boolean
}

export default function TagButton({ title, selected, ...buttonProps }: Params) {
  return (
    <button
      className={cn(
        "bg-gray-scale-700 w-fit rounded-lg p-2 px-4 text-white",
        selected && "border border-primary-400 text-primary-300"
      )}
      {...buttonProps}
    >
      <p className="font-medium">{title}</p>
    </button>
  )
}
