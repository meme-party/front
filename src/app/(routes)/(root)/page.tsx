"use client"
import MemeTypeButton from "@/components/MemeTypeButton"
import MoreViewButton from "@/components/MoreViewButton"
import Sidebar from "@/components/Sidebar"
import TagButton from "@/components/TagButton"
import { COLORS } from "@/styles/colors"
import { Type } from "lucide-react"
import { useRouter } from "next/navigation"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "@/styles/sliderBullet.css"
import Image from "next/image"

export default function Home() {
  const router = useRouter()
  return (
    <section className="my-[60px]">
      <section className="flex justify-center lg:justify-between">
        <Sidebar />
        <section className="flex w-full max-w-[712px] flex-col gap-[32px] lg:mt-[64px]">
          <section className="mx-[-16px] md:mx-[-28px] lg:mx-0">
            <Swiper
              className="relative h-[210px] w-full md:h-[320px] lg:rounded-[16px]"
              modules={[Pagination, Autoplay]}
              pagination={{
                el: `#root-slider`,
                clickable: true,
                renderBullet: function (_, className) {
                  return `<span class="${className} !opacity-100 !bg-gray-scale-600 !w-[8px] !h-[8px]"> </span>`
                }
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
            >
              {Array.from({ length: 2 }).map((_, index) => (
                <SwiperSlide key={index} className="!w-full">
                  <Image src={`/root/slide${index + 1}.png`} alt="slide" fill className="object-cover" />
                </SwiperSlide>
              ))}
              <section
                id="root-slider"
                className="absolute bottom-[8px] z-[10] flex h-[12px] w-full justify-center gap-[4px]"
              />
            </Swiper>
          </section>
          <section className="flex flex-col gap-[16px]">
            <div className="flex flex-col items-start gap-[8px] md:flex-row md:items-center md:gap-[16px]">
              <p className="text-h2-sb text-gray-scale-100 md:text-h1-sb">유형별 밈</p>
              <p className="text-h4-r text-gray-scale-400 md:text-h2-r">
                찾고 있는 밈을 텍스트, 이미지/GIF, 비디오 유형으로 빠르게 찾아봐요!
              </p>
            </div>
            <article className="flex gap-[20px]">
              <MemeTypeButton
                title="텍스트밈"
                Icon={Type}
                iconProps={{ size: 24, color: COLORS.DARK, className: "flex-shrink-0" }}
                onClick={() => router.push("/explore/text")}
              />
              <MemeTypeButton
                title="이미지/GIF 밈"
                Icon={Type}
                iconProps={{ size: 24, color: COLORS.DARK, className: "flex-shrink-0" }}
                onClick={() => router.push("/explore/image")}
              />
              <MemeTypeButton
                title="비디오 밈"
                Icon={Type}
                iconProps={{ size: 24, color: COLORS.DARK, className: "flex-shrink-0" }}
                onClick={() => router.push("/explore/video")}
              />
            </article>
          </section>
          <MoreViewButton title="인기 밈 TOP 100" onClick={() => router.push("/explore/popularity")} />
          <section className="flex flex-col gap-[12px] rounded-[8px] bg-gray-scale-800 px-[12px] py-[16px] md:px-[24px] md:py-[24px]">
            <article className="flex items-center gap-[4px]">
              <p className="text-h2-sb text-gray-scale-100 md:text-h1-sb">트렌드 키워드</p>
              <p className="text-h4-r text-gray-scale-400 md:text-h2-r">지금 핫한 밈 키워드를 소개해요</p>
            </article>
            <article className="flex flex-wrap gap-[8px] md:gap-[16px]">
              <TagButton title="ㄱ키워드" variant="colored" onClick={() => console.log("TagButton2 클릭")} />
              <TagButton
                title="키워드키워드키워드키워드키워드키워드키워드키워드키워드키워드키워드키"
                variant="colored"
                onClick={() => console.log("TagButton2 클릭")}
              />
              <TagButton
                title="키워드키워드키워드키워드"
                variant="colored"
                onClick={() => console.log("TagButton2 클릭")}
              />
              <TagButton title="ㄱ키워드" variant="colored" onClick={() => console.log("TagButton2 클릭")} />
              <TagButton title="ㄱ키워드" variant="colored" onClick={() => console.log("TagButton2 클릭")} />
              <TagButton title="ㄱ키워드" variant="colored" onClick={() => console.log("TagButton2 클릭")} />
            </article>
          </section>
        </section>
        <section className="hidden lg:flex" />
      </section>
    </section>
  )
}
