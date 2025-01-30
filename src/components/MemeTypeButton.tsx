import { cn } from "@/utils/cn"
import type { LucideProps } from "lucide-react"
import type { ButtonHTMLAttributes, ComponentType, SVGProps } from "react"
import Button from "./Button"

interface Params extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  Icon?: ComponentType<SVGProps<SVGSVGElement>>
  iconProps?: Omit<LucideProps, "ref">
}

export default function MemeTypeButton({ title, Icon, iconProps, ...buttonProps }: Params) {
  return (
    <Button
      {...buttonProps}
      className={cn("flex w-[224px] items-center gap-[12px] rounded-lg bg-primary-400 p-2", buttonProps.className)}
    >
      {!!Icon && <Icon {...iconProps} />}
      <p className="font-bold text-dark">{title}</p>
    </Button>
  )
}
