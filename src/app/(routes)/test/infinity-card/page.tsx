"use client"

import Button from "@/components/Button"
import IconButton from "@/components/IconButton"
import { COLORS } from "@/styles/colors"
import { cn } from "@/utils/cn"
import { Heart, LucideProps } from "lucide-react"
import { ComponentType, ReactNode, SVGProps, useEffect, useRef, useState } from "react"

type Props = {
  children: ReactNode
  like: boolean
  Icon?: ComponentType<SVGProps<SVGSVGElement>>
  iconProps?: Omit<LucideProps, "ref">
  iconOnclick?: () => void
}

function MemeCardFrame({
  children,
  Icon = Heart,
  iconProps = { color: COLORS.PRIMARY },
  iconOnclick = () => {},
  like = false
}: Props) {
  return (
    <section
      className={cn(
        "relative flex h-fit min-h-[170px] w-[224px] flex-col gap-[24px] break-all rounded-[12px] bg-gray-scale-700 p-[16px]",
        like && "border border-primary drop-shadow-thumbnail"
      )}
    >
      {Icon && <IconButton Icon={Icon} iconProps={iconProps} onClick={iconOnclick} className="self-end" />}
      {children}
    </section>
  )
}

interface Card {
  id: number
  text: string
}

const TextCard = ({ idx, text }: { idx: number; text: string }) => {
  return (
    <MemeCardFrame like>
      <p>{idx}</p>
      <p className="line-clamp-[15] max-h-[384px] overflow-hidden text-h2-m">{text}</p>
    </MemeCardFrame>
  )
}

type MansornyType = {
  1: Card[]
  2: Card[]
  3: Card[]
}

const MasonryLayout = () => {
  const initCardsNumberList = Array(20)
    .fill(1)
    .map((v, i) => v + i * 3) as number[]
  const [cardsNumberList, setCardNumberList] = useState(initCardsNumberList)
  const [mansornyCol, setMansornyCol] = useState<MansornyType>({ 1: [], 2: [], 3: [] })
  const firstColContainer = useRef<HTMLDivElement>(null)
  const secondColContainer = useRef<HTMLDivElement>(null)
  const thirdColContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    initCardsNumberList.forEach((card, index) => {
      if (!(index % 3)) {
        setMansornyCol((col) => ({ ...col, 3: [...col["3"], { id: index, text: "텍스트 밈 ".repeat(card) }] }))
      } else if (!(index % 2)) {
        setMansornyCol((col) => ({
          ...col,
          2: [...col["2"], { id: index, text: "텍스트 밈 ".repeat(card) }]
        }))
      } else {
        setMansornyCol((col) => ({ ...col, 1: [...col["1"], { id: index, text: "텍스트 밈 ".repeat(card) }] }))
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const increaseCardsList = () => {
    console.log("얘?")
    setCardNumberList((cards) => {
      const last = [...cards].pop()
      const addingNumbers = Array(3)
        .fill(last)
        .map((v, i) => v + i * 3)
      return [...addingNumbers]
    })
  }

  const dealWithCards = () => {
    const firstHeight = firstColContainer.current?.offsetHeight
    const secondHeight = secondColContainer.current?.offsetHeight
    const thirdHeight = thirdColContainer.current?.offsetHeight
    if (!firstHeight || !secondHeight || !thirdHeight) return
    console.log("???")
    const ordering = [
      { order: "1", height: firstHeight },
      { order: "2", height: secondHeight },
      { order: "3", height: thirdHeight }
    ]
      .sort((a, b) => a.height - b.height)
      .map((orderd) => orderd.order) as unknown[]

    console.log(ordering)
    console.log(cardsNumberList)

    const [first, second, third] = ordering

    cardsNumberList.forEach((card, index) => {
      if (!(index % 3)) {
        console.log("실행")
        setMansornyCol((col) => ({
          ...col,
          first: [...col[first as keyof MansornyType], { id: card, text: "텍스트 밈 ".repeat(card) }]
        }))
      } else if (!(index % 2)) {
        setMansornyCol((col) => ({
          ...col,
          third: [...col[third as keyof MansornyType], { id: card, text: "텍스트 밈 ".repeat(card) }]
        }))
      } else {
        setMansornyCol((col) => ({
          ...col,
          second: [...col[second as keyof MansornyType], { id: card, text: "텍스트 밈 ".repeat(card) }]
        }))
      }
    })
  }
  useEffect(() => {
    dealWithCards()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardsNumberList])

  const showHeight = () => {
    increaseCardsList()
    console.log(firstColContainer.current?.offsetHeight)
    console.log(secondColContainer.current?.offsetHeight)
    console.log(thirdColContainer.current?.offsetHeight)
  }

  return (
    <section className="relative mx-[20px] my-[80px]">
      <Button onClick={showHeight} className="text-gray-scale-200">
        나와라
      </Button>
      <div className="flex gap-[18px]">
        <div>
          <div className="flex flex-col gap-[18px]" ref={firstColContainer}>
            {mansornyCol["1"].map((card, idx) => (
              <TextCard key={`1-${card.id}-${idx}`} text={card.text} idx={card.id} />
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-[18px]" ref={secondColContainer}>
            {mansornyCol["2"].map((card, idx) => (
              <TextCard key={`2-${card.id}-${idx}`} text={card.text} idx={card.id} />
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-[18px]" ref={thirdColContainer}>
            {mansornyCol["3"].map((card, idx) => (
              <TextCard key={`3-${card.id}-${idx}`} text={card.text} idx={card.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MasonryLayout
