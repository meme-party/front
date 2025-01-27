import { Heart, type LucideProps } from "lucide-react"
import type { ComponentType, SVGProps } from "react"
import IconButton from "./IconButton"
import { cn } from "@/utils/cn"
import Image from "next/image"
import { COLORS } from "@/styles/colors"

type MediaTypeValue = "image" | "video"

interface CommonType {
  onClick?: () => void
  Icon?: ComponentType<SVGProps<SVGSVGElement>>
  iconProps?: Omit<LucideProps, "ref">
  iconOnclick?: () => void
  like?: boolean
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

export default function ThumbnailCard({
  type,
  text,
  url,
  Icon = Heart,
  iconProps = { color: COLORS.PRIMARY },
  like = false
}: Params) {
  return (
    <section
      className={cn(
        "relative flex h-fit w-[224px] flex-col gap-[24px] break-all rounded-lg bg-gray-scale-700 p-4",
        like && "border border-primary drop-shadow-thumbnail"
      )}
    >
      {Icon && <IconButton Icon={Icon} iconProps={iconProps} className="self-end" />}
      {type === "text" && <p>{text}</p>}
      {type === "image" && (
        <Image src={url} alt={"meme-thumbnail"} width={224} height={0} className="rounded-md object-contain" />
      )}
      {type === "video" && <p>{url}</p>}
    </section>
  )
}
