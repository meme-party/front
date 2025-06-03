"use client"

type Props = {
  textColor?: string
  text: string
  onClick?: () => void
}

export default function SettingButton({ text, textColor = "text-gray-scale-100", onClick }: Props) {
  return (
    <div className="cursor-pointer rounded-[8px] bg-gray-scale-800 px-[24px] py-[12px]" onClick={onClick}>
      <p className={textColor}>{text}</p>
    </div>
  )
}
