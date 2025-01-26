import type { LucideProps } from "lucide-react"
import type { ComponentType, SVGProps } from "react"
import IconButton from "./IconButton"

type MediaTypeValue = "image" | "video"

interface CommonType {
  onClick?: () => void
  Icon?: ComponentType<SVGProps<SVGSVGElement>>
  iconProps?: Omit<LucideProps, "ref">
  iconOnclick?: () => void
}

interface TextType extends CommonType {
  type: "text"
  text: string
  url?: never
}

interface MediaType extends CommonType {
  type: MediaTypeValue
  text?: never
  url: string
}

type Params = TextType | MediaType

export default function ThumbnailCard({ type, text, url, Icon, iconProps }: Params) {
  return (
    <section className="flex w-[224px] flex-col gap-[24px] break-all rounded-lg bg-gray-scale-700 p-4">
      {Icon && <IconButton Icon={Icon} iconProps={iconProps} className="self-end" />}
      {type === "text" && <p>{text}</p>}
      {type === "image" && <p>{url}</p>}
      {type === "video" && <p>{url}</p>}
    </section>
  )
}
