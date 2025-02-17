"use client"
import { useModalStore } from "@/store/modal"
import ConfirmModal from "@/components/modal/ConfirmModal"
import Button from "@/components/Button"
import CollectionModal from "@/components/modal/CollectionModal"

export default function Home() {
  const { openModal, closeModal } = useModalStore()

  const openLogoutModal = () => {
    openModal(
      <ConfirmModal onConfirm={() => {}} onCancel={closeModal}>
        <p className="text-xl font-medium text-white">로그아웃 하시겠습니까?</p>
      </ConfirmModal>
    )
  }
  const openDeleteAccount = () => {
    openModal(
      <ConfirmModal onConfirm={() => {}} onCancel={closeModal}>
        <p className="text-xl font-medium text-white">탈퇴하면 모든 정보가 사라집니다.</p>
        <p className="text-xl font-medium text-white">탈퇴하시겠습니까?</p>
      </ConfirmModal>
    )
  }
  const openCollenctionModal = () => {
    openModal(<CollectionModal onCancel={closeModal} />)
  }

  return (
    <div className="flex min-h-screen items-center justify-center gap-10 bg-gray-100">
      <Button className="text-white" onClick={openLogoutModal}>
        로그아웃 모달 열기
      </Button>
      <Button className="text-white" onClick={openDeleteAccount}>
        탈퇴 모달 열기
      </Button>
      <Button className="text-white" onClick={openCollenctionModal}>
        컬렉션 모달 열기
      </Button>
    </div>
  )
}
