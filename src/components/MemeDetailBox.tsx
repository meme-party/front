"use client"
import { useGetApiV1MemesDetailByIdQuery } from "@/api/react-query/useGetApiV1MemesDetailByIdQuery"
import TagButton from "@/components/TagButton"
import { TypeEnum } from "@/openapi/models/TypeEnum"
import { COLORS } from "@/styles/colors"
import { Heart } from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation"

export default function MemeDetailBox() {
  const { id } = useParams()
  const { data } = useGetApiV1MemesDetailByIdQuery(id as string)
  return (
    <section className="flex w-full flex-col gap-[32px] rounded-[12px] bg-gray-scale-800 p-[24px]">
      <div className="flex flex-col gap-[12px]">
        <article className="flex items-center justify-between">
          <p className="text-h1-sb">{data?.title}</p>
          <button>
            <Heart color={COLORS.PRIMARY} />
          </button>
        </article>
        <article className="flex flex-col gap-[24px] md:flex-row">
          {data?.type === TypeEnum.Text && (
            <div className="h-fit w-full flex-shrink-0 break-all rounded-[8px] bg-gray-scale-700 p-[16px] md:max-w-[224px]">
              {data.title}
            </div>
          )}
          {data?.type === TypeEnum.Image && (
            <Image
              // src={'/logo.png'}
              src={data.thumbnail.url ?? "/"}
              alt={data.title}
              width={224}
              height={0}
              className="self-center rounded-[8px] object-contain"
            />
          )}
          {data?.type === TypeEnum.Video && <p>{data?.title}</p>}
          <p className="text-h2-r leading-[28px] text-gray-scale-400">{data?.description}</p>
        </article>
      </div>
      <article className="flex flex-wrap gap-[16px]">
        {data?.tags.map((tag) => <TagButton key={tag.id} title={tag.name} variant="colored" />)}
      </article>
    </section>
  )
}
