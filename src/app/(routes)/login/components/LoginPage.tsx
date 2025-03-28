import Button from "@/components/Button"
import Link from "next/link"

const jsKey = process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY
const redirectUri = process.env.NEXT_PUBLIC_LOGIN_REDIRECT_URI
export default function LoginPage({ isProcess = false }: { isProcess?: boolean }) {
  return (
    <div>
      <Link
        href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${jsKey}&redirect_uri=${redirectUri}`}
      >
        <Button>카카오 로그인하기</Button>
      </Link>
      {isProcess && "spinner 가 필요하다"}
    </div>
  )
}
