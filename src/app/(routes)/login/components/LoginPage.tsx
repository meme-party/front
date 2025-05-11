import { KakaoSymbol } from "@/components/icons/KakaoSymbol"
import Image from "next/image"
import Link from "next/link"

const jsKey = process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY
const redirectUri = process.env.NEXT_PUBLIC_LOGIN_REDIRECT_URI

// * 추 후 스피너 구현 시 필요해보임
// { isProcess = false }: { isProcess?: boolean }
export default function LoginPage() {
  return (
    <section className="my-[60px]">
      <section className="flex justify-center lg:justify-between">
        <article className="hidden flex-shrink-0 flex-col lg:flex">
          <section className="flex flex-col gap-[16px]">
            <article className="flex items-center gap-[16px]">
              <p>Icon</p>
              <p className="text-webTitle text-gray-scale-100">로그인</p>
            </article>
          </section>
        </article>
        <article className="mt-[108px] flex w-full max-w-[852px] flex-col-reverse items-center justify-between gap-[72px] lg:flex-row">
          <Link
            href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${jsKey}&redirect_uri=${redirectUri}`}
            className="flex w-full max-w-[280px] items-center justify-center gap-[8px] rounded-[12px] bg-[#FEE500] p-[12px] lg:max-w-[400px]"
          >
            <KakaoSymbol size={20} color="black" />
            <p className="text-black">카카오 로그인</p>
          </Link>
          <figure className="relative h-[240px] w-[240px] md:h-[382px] md:w-[382px]">
            <Image src="/login.png" alt="login-image" fill className="object-contain" />
          </figure>
        </article>
        <article className="hidden lg:flex" />
      </section>
    </section>
  )
}
