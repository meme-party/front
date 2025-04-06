import MyProfile from "./components/MyProfile"

export default function MyPage() {
  return (
    <>
      <section className="flex w-full max-w-[712px] flex-col gap-[32px] lg:mt-[80px]">
        <MyProfile />
      </section>
      <section className="hidden lg:flex" />
    </>
  )
}
