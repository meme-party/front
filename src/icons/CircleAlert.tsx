import { COLORS } from "@/styles/colors"

interface Params {
  size?: number
  bgColor?: string
  borderColor?: string
  pathColor?: string
}

export default function CircleAlert({
  size = 24,
  bgColor = COLORS.PRIMARY,
  borderColor = COLORS.PRIMARY,
  pathColor = COLORS.WHITE,
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
      className="lucide lucide-circle-alert"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="12" stroke={pathColor} />
      <line x1="12" x2="12.01" y1="16" y2="16" stroke={pathColor} />
    </svg>
  )
}
