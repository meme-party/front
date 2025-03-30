import { Heart, type LucideProps } from "lucide-react"
import type { ComponentType, SVGProps } from "react"
import IconButton from "./IconButton"
import { cn } from "@/utils/cn"
import Image from "next/image"
import { COLORS } from "@/styles/colors"
import { TypeEnum } from "@/openapi/models/TypeEnum"
import { Meme } from "@/openapi/models/Meme"

interface Params {
  data: Meme
  onClick?: () => void
  Icon?: ComponentType<SVGProps<SVGSVGElement>>
  iconProps?: Omit<LucideProps, "ref">
  iconOnclick?: () => void
}

export default function ThumbnailCard({ data, Icon = Heart, iconProps = { color: COLORS.PRIMARY } }: Params) {
  return (
    <section
      className={cn(
        "relative flex h-fit flex-col gap-[24px] break-all rounded-[8px] bg-gray-scale-700 p-[16px]"
        // like && "border border-primary drop-shadow-thumbnail"
      )}
    >
      {Icon && <IconButton Icon={Icon} iconProps={iconProps} className="self-end" />}
      {data.type === TypeEnum.Text && <p>{data.title}</p>}
      {data.type === TypeEnum.Image && (
        <Image
          src={data.thumbnail.url ?? "/"}
          alt={data.title}
          width={224}
          height={0}
          className="self-center rounded-[8px] object-contain"
        />
      )}
      {data.type === TypeEnum.Video && <p>{data.title}</p>}
    </section>
  )
}
