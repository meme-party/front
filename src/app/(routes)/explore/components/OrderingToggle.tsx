export default function OrderingToggle() {
  return (
    <section className="flex w-fit items-center gap-[8px] rounded-[8px] bg-gray-scale-700 p-[6px]">
      <button onClick={() => console.log("최신")}>
        <p className="rounded-[6px] px-[8px] py-[4px] text-h2-m">최신</p>
      </button>
      <button onClick={() => console.log("인기")}>
        <p className="rounded-[6px] bg-gray-scale-600 px-[8px] py-[4px] text-h2-m">인기</p>
      </button>
    </section>
  )
}
