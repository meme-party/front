"use client"

import { cn } from "@/utils/cn"
import type { LucideProps } from "lucide-react"
import type { ComponentType, InputHTMLAttributes, SVGProps } from "react"

interface Params extends InputHTMLAttributes<HTMLInputElement> {
  onSearch?: () => void
  Icon?: ComponentType<SVGProps<SVGSVGElement>>
  iconProps?: Omit<LucideProps, "ref">
}

export default function SearchInput({ onSearch, Icon, iconProps, ...props }: Params) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSearch) {
      onSearch()
    }
  }

  return (
    <section className="relative flex w-fit items-center">
      <input
        {...props}
        onKeyDown={handleKeyDown}
        className={cn(
          "placeholder:text-gray bg-gray-scale-800 w-full rounded-lg border border-primary-400 p-4 font-semibold outline-none",
          Icon && "pr-10",
          props.className
        )}
      />
      {Icon && (
        <button type="button" onClick={onSearch} className="absolute end-2 hover:text-primary-500">
          <Icon {...iconProps} />
        </button>
      )}
    </section>
  )
}
