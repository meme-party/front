import { COLORS } from "@/styles/colors"

interface Params {
  size?: number
  bgColor?: string
  borderColor?: string
  pathColor?: string
}

export default function CircleCheck({
  size = 24,
  bgColor = COLORS.PRIMARY,
  borderColor = COLORS.PRIMARY,
  pathColor = COLORS.WHITE
}: Params) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={bgColor}
      stroke={borderColor}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-circle-check"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" stroke="currentColor" color={pathColor} />
    </svg>
  )
}
