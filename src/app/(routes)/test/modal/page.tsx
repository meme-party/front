"use client"
import { useModalStore } from "@/store/modal"
import ModalFrame from "@/components/modal/ModalFrame"

export default function Home() {
  const { openModal } = useModalStore()

  const handleOpenModal = () => {
    openModal(
      <div>
        <h2 className="text-xl font-bold">모달 제목</h2>
        <p className="text-gray-600 mt-2">이것은 재사용 가능한 모달입니다.</p>
        <button
          className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          onClick={() => alert("버튼 클릭!")}
        >
          동작 버튼
        </button>
      </div>
    )
  }

  return (
    <div className="bg-gray-100 flex min-h-screen items-center justify-center">
      <button className="rounded bg-blue-500 px-6 py-3 text-white hover:bg-blue-600" onClick={handleOpenModal}>
        모달 열기
      </button>
      <ModalFrame />
    </div>
  )
}
