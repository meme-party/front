import Image from "next/image"

export default function Footer() {
  return (
    <section>
      <article className="relative h-[20px] w-[120px]">
        <Image src={"/kakao.png"} alt="logo" fill />
      </article>
    </section>
  )
}
