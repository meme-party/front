import { ReactNode } from "react"
import Button from "../Button"

type Props = {
  children: ReactNode
  onConfirm: () => void
  onCancel: () => void
}

export default function ConfirmModal({ children, onCancel, onConfirm }: Props) {
  return (
    <div className="flex flex-col gap-[56px] rounded-lg bg-gray-scale-800 stroke-primary-300 stroke-[1px] px-[38px] py-[44px] text-center">
      <div>{children}</div>
      <div className="flex justify-center gap-[24px]">
        <Button
          className="h-[48px] w-[148px] bg-gray-scale-700 text-h1-m text-gray-scale-500"
          onClick={() => onConfirm()}
        >
          예
        </Button>
        <Button className="h-[48px] w-[148px] text-h1-m text-white" onClick={() => onCancel()}>
          아니요
        </Button>
      </div>
    </div>
  )
}
