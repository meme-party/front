import { ArrowRight, type LucideProps } from "lucide-react"
import type { ButtonHTMLAttributes, ComponentType, SVGProps } from "react"
import Button from "./Button"
import { cn } from "@/utils/cn"

interface Params extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  Icon?: ComponentType<SVGProps<SVGSVGElement>>
  iconProps?: Omit<LucideProps, "ref">
}
export default function MoreViewButton({ title, Icon = ArrowRight, iconProps, ...buttonProps }: Params) {
  return (
    <Button
      {...buttonProps}
      className={cn(
        "relative flex w-full cursor-pointer items-center justify-between rounded-[8px] border border-primary-400 bg-gray-scale-700 px-[16px] py-[8px] text-h2-sb text-gray-scale-100",
        buttonProps.className
      )}
    >
      <p>{title}</p>
      <Icon {...iconProps} />
    </Button>
  )
}
