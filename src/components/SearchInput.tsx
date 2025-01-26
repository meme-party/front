"use client"

import { cn } from "@/utils/cn"
import type { LucideProps } from "lucide-react"
import type { ComponentType, InputHTMLAttributes, SVGProps } from "react"
import IconButton from "./IconButton"

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
          "w-full rounded-lg border border-primary-400 bg-gray-scale-800 p-4 font-semibold outline-none placeholder:text-gray",
          Icon && "pr-10",
          props.className
        )}
      />
      {Icon && <IconButton onClick={onSearch} className="absolute end-2" Icon={Icon} iconProps={iconProps} />}
    </section>
  )
}
