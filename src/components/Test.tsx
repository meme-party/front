"use client"
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid"
import { useState } from "react"

function getItems(count: number) {
  const nextItems = []

  for (let i = 0; i < count; ++i) {
    nextItems.push({ key: i + Math.random() })
  }
  return nextItems
}

const Item = ({ num }: any) => (
  <div className="w-[200px]">
    <img src={`https://naver.github.io/egjs-infinitegrid/assets/image/${(num % 33) + 1}.jpg`} alt="egjs" />
    <div className="info">{`egjs ${num}`}</div>
  </div>
)

export default function Test() {
  const [items, setItems] = useState(() => getItems(0, 10))

  return (
    <MasonryInfiniteGrid
      // className="container"
      gap={5}
      // align={"justify"}
      // useFirstRender={true}
      onRequestAppend={(e) => {
        setItems([...items, ...getItems(10)])
      }}
      onRenderComplete={(e) => {
        console.log(e)
      }}
    >
      {items.map((item) => (
        <Item key={item.key} num={item.key.toFixed(0)} />
      ))}
    </MasonryInfiniteGrid>
  )
}

// "use client"
// import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid"
// import { useState } from "react"

// function getItems(nextGroupKey: number, count: number) {
//   const nextItems = []
//   const nextKey = nextGroupKey * count

//   for (let i = 0; i < count; ++i) {
//     nextItems.push({ groupKey: nextGroupKey, key: nextKey + i })
//   }
//   return nextItems
// }

// const Item = ({ num }: any) => (
//   <div className="item">
//     <div className="thumbnail w-[200px]">
//       <img src={`https://naver.github.io/egjs-infinitegrid/assets/image/${(num % 33) + 1}.jpg`} alt="egjs" />
//     </div>
//     <div className="info">{`egjs ${num}`}</div>
//   </div>
// )

// export default function Test() {
//   const [items, setItems] = useState(() => getItems(0, 10))

//   return (
//     <MasonryInfiniteGrid
//       // className="container"
//       gap={5}
//       // align={"justify"}
//       // useFirstRender={true}
//       onRequestAppend={(e) => {
//         console.log("ㅇㅇㅇ")
//         const nextGroupKey = (+e.groupKey! || 0) + 1

//         setItems([...items, ...getItems(nextGroupKey, 10)])
//       }}
//       onRenderComplete={(e) => {
//         console.log(e)
//       }}
//     >
//       {items.map((item) => (
//         <Item data-grid-groupkey={item.groupKey} key={item.key} num={item.key} />
//       ))}
//     </MasonryInfiniteGrid>
//   )
// }
