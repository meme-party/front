"use client"

import { useToast } from "@/sotre/toast"

export default function Home() {
  const { showToast, closeToast } = useToast()

  const toastProps = {
    content: (
      <section>
        <p>토스트메세지 예제</p>
        <button onClick={() => closeToast()}>토스트 닫기</button>
      </section>
    ),
    autoClose: false
  }

  return (
    <section>
      <div className="bg-primary-100 w-[100px] h-[100px]" />
      <div className="bg-primary-200 w-[100px] h-[100px]" />
      <div className="bg-primary-300 w-[100px] h-[100px]" />
      <div className="bg-primary-400 w-[100px] h-[100px]" />
      <div className="bg-primary-500 w-[100px] h-[100px]" />
      <div className="bg-primary-600 w-[100px] h-[100px]" />
      <button onClick={() => showToast(toastProps)}>버튼</button>
    </section>
  )
}
