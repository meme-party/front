"use client"
import MemeTypeButtonSection from "@/components/MemeTypeButtonSection"
import MoreViewButton from "@/components/MoreViewButton"
import Sidebar from "@/components/Sidebar"
import TrendingTags from "@/components/TrendingTags"
import "@/styles/sliderBullet.css"
import { useRouter } from "next/navigation"
import "swiper/css"
import "swiper/css/pagination"
import BannerSlide from "./components/BannerSlide"

export default function Home() {
  const router = useRouter()
  return (
    <section className="my-[60px]">
      <section className="flex justify-center lg:justify-between">
        <Sidebar />
        <section className="flex w-full max-w-[712px] flex-col gap-[32px] lg:mt-[64px]">
          <BannerSlide />
          <section className="flex flex-col gap-[16px]">
            <div className="flex flex-col items-start gap-[8px] md:flex-row md:items-center md:gap-[16px]">
              <p className="text-h2-sb text-gray-scale-100 md:text-h1-sb">유형별 밈</p>
              <p className="text-h4-r text-gray-scale-400 md:text-h2-r">
                찾고 있는 밈을 텍스트, 이미지/GIF, 비디오 유형으로 빠르게 찾아봐요!
              </p>
            </div>
            <MemeTypeButtonSection />
          </section>
          <MoreViewButton title="인기 밈 TOP 100" onClick={() => router.push("/explore/popularity")} />
          {/* 🎯 실제 API 데이터로 트렌드 키워드 표시 */}
          <TrendingTags />
        </section>
        <section className="hidden lg:flex" />
      </section>
    </section>
  )
}
