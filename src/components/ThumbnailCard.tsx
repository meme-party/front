"use client"
import { Meme } from "@/openapi/models/Meme"
import { TypeEnum } from "@/openapi/models/TypeEnum"
import { useUserStore } from "@/store/user"
import { COLORS } from "@/styles/colors"
import { cn } from "@/utils/cn"
import { Heart, type LucideProps } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import type { ComponentType, SVGProps } from "react"
import IconButton from "./IconButton"
import CollectionModal from "./modal/CollectionModal/CollectionModal"
import { useModalStore } from "@/store/modal"

interface Params {
  data: Meme
  onClick?: () => void
  Icon?: ComponentType<SVGProps<SVGSVGElement>>
  iconProps?: Omit<LucideProps, "ref">
  iconOnclick?: () => void
}

export default function ThumbnailCard({ data, Icon = Heart, iconProps = { color: COLORS.PRIMARY } }: Params) {
  const router = useRouter()
  const user = useUserStore((state) => state.user)
  const { openModal, closeModal } = useModalStore()

  // const { mutate: postApiV1Bookmarkings } = usePostApiV1Bookmarkings()

  const openCollectionModal = () => {
    openModal(<CollectionModal id={data.id} onCancel={closeModal} />)
  }

  // 아이콘 클릭 시 세션 여부에 따라 로그 출력
  const handleIconClick = async (e: React.MouseEvent) => {
    if (user) {
      e.stopPropagation()
      openCollectionModal()
      // postApiV1Bookmarkings()
    }
  }

  return (
    <section
      className={cn(
        "relative flex h-fit cursor-pointer flex-col gap-[24px] break-all rounded-[8px] bg-gray-scale-700 p-[16px]"
        // like && "border border-primary drop-shadow-thumbnail"
      )}
      onClick={() => router.push(`/detail/${data.id}`)}
    >
      {Icon && <IconButton Icon={Icon} iconProps={iconProps} className="self-end" onClick={handleIconClick} />}
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
