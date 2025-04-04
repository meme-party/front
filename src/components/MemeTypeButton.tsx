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
      className={cn(
        "flex w-[224px] items-center gap-[8px] rounded-[8px] bg-primary-400 p-[8px]",
        buttonProps.className
      )}
    >
      {!!Icon && <Icon {...iconProps} />}
      <p className="text-h3-sb text-gray-scale-900 md:text-h2-b">{title}</p>
    </Button>
  )
}
