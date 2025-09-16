"use client"
import { useBookmarksQuery, useCreateBookmarkMutation, useDeleteBookmarkMutation } from "@/api/hooks/bookmarks"
import { useState } from "react"
import { Bookmark, Plus, Trash2 } from "lucide-react"

export default function BookmarkManager() {
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [newBookmarkName, setNewBookmarkName] = useState("")
  const [newBookmarkDescription, setNewBookmarkDescription] = useState("")

  // 📋 북마크 목록 조회
  const { data: bookmarks, isLoading, error } = useBookmarksQuery()

  // ➕ 북마크 생성
  const createBookmark = useCreateBookmarkMutation!({
    onSuccess: () => {
      setShowCreateForm(false)
      setNewBookmarkName("")
      setNewBookmarkDescription("")
      // Toast 메시지 표시 (추후 구현)
      console.log("✅ 북마크가 생성되었습니다!")
    },
    onError: (error) => {
      console.error("❌ 북마크 생성 실패:", error)
    }
  })

  // 🗑️ 북마크 삭제
  const deleteBookmark = useDeleteBookmarkMutation!({
    onSuccess: () => {
      console.log("✅ 북마크가 삭제되었습니다!")
    }
  })

  const handleCreateBookmark = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newBookmarkName.trim()) return

    createBookmark.mutate({
      name: newBookmarkName,
      description: newBookmarkDescription || undefined
    })
  }

  const handleDeleteBookmark = (id: number, name: string) => {
    if (confirm(`"${name}" 북마크를 정말 삭제하시겠습니까?`)) {
      deleteBookmark.mutate(id)
    }
  }

  if (isLoading) return <div className="py-8 text-center">로딩 중...</div>
  if (error) return <div className="py-8 text-center text-red-500">에러 발생: {error.message}</div>

  return (
    <div className="mx-auto w-full max-w-4xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Bookmark className="h-6 w-6" />
          <h1 className="text-2xl font-bold">내 북마크</h1>
        </div>

        <button
          onClick={() => setShowCreateForm(true)}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 transition-colors hover:bg-blue-700"
        >
          <Plus className="h-4 w-4" />새 북마크 만들기
        </button>
      </div>

      {/* 북마크 생성 폼 */}
      {showCreateForm && (
        <div className="mb-6 rounded-lg bg-gray-800 p-6">
          <h2 className="mb-4 text-lg font-semibold">새 북마크 만들기</h2>
          <form onSubmit={handleCreateBookmark}>
            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium">북마크 이름 *</label>
              <input
                type="text"
                value={newBookmarkName}
                onChange={(e) => setNewBookmarkName(e.target.value)}
                className="w-full rounded-lg border border-gray-600 bg-gray-700 p-3 text-white focus:border-blue-500 focus:outline-none"
                placeholder="예: 웃긴 짤 모음"
                required
              />
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium">설명 (선택)</label>
              <textarea
                value={newBookmarkDescription}
                onChange={(e) => setNewBookmarkDescription(e.target.value)}
                className="h-24 w-full resize-none rounded-lg border border-gray-600 bg-gray-700 p-3 text-white focus:border-blue-500 focus:outline-none"
                placeholder="이 북마크에 대한 설명을 입력하세요"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={createBookmark.isPending}
                className="flex-1 rounded-lg bg-blue-600 px-4 py-2 transition-colors hover:bg-blue-700 disabled:bg-gray-600"
              >
                {createBookmark.isPending ? "생성 중..." : "만들기"}
              </button>
              <button
                type="button"
                onClick={() => setShowCreateForm(false)}
                className="flex-1 rounded-lg bg-gray-600 px-4 py-2 transition-colors hover:bg-gray-700"
              >
                취소
              </button>
            </div>
          </form>
        </div>
      )}

      {/* 북마크 목록 */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {bookmarks?.results?.map((bookmark) => (
          <div key={bookmark.id} className="hover:bg-gray-750 rounded-lg bg-gray-800 p-4 transition-colors">
            <div className="mb-3 flex items-start justify-between">
              <div className="flex-1">
                <h3 className="mb-1 text-lg font-semibold">{bookmark.title}</h3>
              </div>

              <button
                onClick={() => handleDeleteBookmark(bookmark.id, bookmark.title)}
                disabled={deleteBookmark.isPending}
                className="p-1 text-gray-400 transition-colors hover:text-red-400"
                title="삭제"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-400">
              <span>{bookmark.bookmarkingsCount || 0}개 항목</span>
              <span>{bookmark.createdAt ? new Date(bookmark.createdAt).toLocaleDateString() : ""}</span>
            </div>

            <button
              className="mt-3 w-full rounded-lg bg-gray-700 px-4 py-2 transition-colors hover:bg-gray-600"
              onClick={() => {
                // 북마크 상세 페이지로 이동
                window.location.href = `/bookmarks/${bookmark.id}`
              }}
            >
              열기
            </button>
          </div>
        ))}
      </div>

      {bookmarks?.results?.length === 0 && (
        <div className="py-12 text-center">
          <Bookmark className="mx-auto mb-4 h-16 w-16 text-gray-400" />
          <h3 className="mb-2 text-lg font-medium">아직 북마크가 없습니다</h3>
          <p className="mb-4 text-gray-400">첫 번째 북마크를 만들어서 좋아하는 밈들을 모아보세요!</p>
          <button
            onClick={() => setShowCreateForm(true)}
            className="rounded-lg bg-blue-600 px-4 py-2 transition-colors hover:bg-blue-700"
          >
            첫 북마크 만들기
          </button>
        </div>
      )}
    </div>
  )
}
