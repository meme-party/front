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
        "relative flex w-full cursor-pointer items-center justify-between rounded-lg border border-primary-400 bg-gray-scale-700 p-2 px-4 text-white",
        buttonProps.className
      )}
    >
      <p className="font-semibold">{title}</p>
      <Icon {...iconProps} />
    </Button>
  )
}
