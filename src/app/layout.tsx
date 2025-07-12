import Header from "@/components/Header"
import Modal from "@/components/modal/Modal"
import Toast from "@/components/Toast"
import { Pretendard } from "@/fonts"
import ReactQueryProvider from "@/lib/providers/ReactQueryProvider"
import SessionProvider from "@/lib/providers/SessionProvider"
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
      <body className={(cn(Pretendard.variable), "px-[16px] md:px-[28px] lg:px-[120px]")}>
        <ReactQueryProvider>
          <SessionProvider>
            <Header />
            {children}
            <Toast />
            <Modal />
          </SessionProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
