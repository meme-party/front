import type { LucideProps } from "lucide-react"
import type { ButtonHTMLAttributes, ComponentType, SVGProps } from "react"

interface Params extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  Icon?: ComponentType<SVGProps<SVGSVGElement>>
  iconProps?: Omit<LucideProps, "ref">
}

export default function MemeTypeButton({ title, Icon, iconProps, ...buttonProps }: Params) {
  return (
    <button className="flex w-[224px] items-center gap-[12px] rounded-lg bg-primary-400 p-2" {...buttonProps}>
      {!!Icon && <Icon {...iconProps} />}
      <p className="font-bold text-dark">{title}</p>
    </button>
  )
}
