import Modal from "@/components/modal/Modal"
import Toast from "@/components/Toast"
import { Pretendard } from "@/fonts"
import "@/styles/globals.css"
import "@/styles/reset.css"
import { cn } from "@/utils/cn"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Memez",
  description: "welcome to memez party"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(Pretendard.variable)}>
        {children}
        <Toast />
        <Modal />
      </body>
    </html>
  )
}
