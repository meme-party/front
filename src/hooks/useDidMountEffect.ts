import { useEffect, useRef } from "react"

export default function useDidMountEffect(func: () => void, deps: unknown[]) {
  const didMount = useRef<boolean>(true)

  useEffect(() => {
    if (!didMount.current) return
    func()
    didMount.current = false
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
