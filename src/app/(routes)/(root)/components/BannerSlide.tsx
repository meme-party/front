"use client"
import "@/styles/sliderBullet.css"
import Image from "next/image"
import "swiper/css"
import "swiper/css/pagination"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export default function BannerSlide() {
  return (
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
          delay: 5000,
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
  )
}
