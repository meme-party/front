"use client"

import { cn } from "@/utils/cn"
import type { LucideProps } from "lucide-react"
import { useRef, type ComponentType, type InputHTMLAttributes, type SVGProps } from "react"
import IconButton from "./IconButton"

interface Params extends InputHTMLAttributes<HTMLInputElement> {
  onSearch: (value: string) => void
  Icon?: ComponentType<SVGProps<SVGSVGElement>>
  iconProps?: Omit<LucideProps, "ref">
}

export default function SearchInput({ onSearch, Icon, iconProps, ...props }: Params) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(e.currentTarget.value)
    }
  }

  const handleClick = () => {
    const value = inputRef.current?.value ?? ""
    onSearch(value)
  }

  return (
    <section className="relative flex w-full items-center">
      <input
        {...props}
        ref={inputRef}
        onKeyDown={handleKeyDown}
        className={cn(
          "w-full rounded-[8px] border border-primary-400 bg-gray-scale-800 px-[16px] py-[12px] text-h3-r outline-none placeholder:text-gray-scale-400 md:text-h2-r",
          Icon && "pr-10",
          props.className
        )}
      />
      {Icon && <IconButton onClick={handleClick} className="absolute end-[8px]" Icon={Icon} iconProps={iconProps} />}
    </section>
  )
}
