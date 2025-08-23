"use client"
import { usePostApiV1Bookmarks } from "@/api/react-query/usePostApiV1Bookmarks"
import Button from "@/components/Button"
import Input from "@/components/Input"
import { useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"

type FormValues = { title: string }

type Props = {
  onCreateSuccess: () => void
}

export default function CollectionCreate({ onCreateSuccess }: Props) {
  const { register, handleSubmit } = useForm<FormValues>()
  const { mutateAsync } = usePostApiV1Bookmarks()
  const queryClient = useQueryClient()

  const submit = async (data: FormValues) => {
    await mutateAsync(data)
    await queryClient.invalidateQueries({ queryKey: [`/api/v1/bookmarks`] })
    onCreateSuccess()
  }
  return (
    <form className="flex h-full flex-col justify-between" onSubmit={handleSubmit(submit)}>
      <div className="flex flex-col gap-[16px]">
        <p>컬렉션 이름</p>
        <Input placeholder="컬렉션 이름을 입력해주세요" maxLength={20} {...register("title")} />
      </div>
      <div className="flex justify-end">
        <Button className="h-[40px] w-[148px] bg-primary-400 p-0 disabled:bg-gray-scale-700" type="submit">
          <p className="text-h1-m text-gray-scale-100">완료</p>
        </Button>
      </div>
    </form>
  )
}
