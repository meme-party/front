import Image from "next/image"

export default function Masonry() {
  return (
    <section className="flex items-center justify-center">
      <section className="w-full columns-2 break-inside-avoid gap-[8px] sm:columns-3">
        {Array.from({ length: 100 }).map((_, index) => (
          <Images key={index} src={getRandomImage()} />
        ))}
      </section>
    </section>
  )
}

interface Params {
  src: string
}

const Images = ({ src }: Params) => {
  return (
    <div className="relative mb-[8px]">
      <Image src={src} width={224} height={0} alt="cat" className="object-contain" />
    </div>
  )
}

// 랜덤으로 이미지 선택
const getRandomImage = () => {
  const images = ["/cat.png", "/random1.jpg", "/random2.jpg"]
  return images[Math.floor(Math.random() * images.length)]
}
