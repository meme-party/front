import type { LucideProps } from "lucide-react"
import React, { type ComponentType, type ButtonHTMLAttributes, type SVGProps } from "react"

interface Params extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: ComponentType<SVGProps<SVGSVGElement>>
  iconProps?: Omit<LucideProps, "ref">
}
export default function IconButton({ Icon, iconProps, ...buttonProps }: Params) {
  return (
    <button type="button" {...buttonProps}>
      <Icon {...iconProps} />
    </button>
  )
}
