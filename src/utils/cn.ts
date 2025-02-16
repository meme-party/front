import { type ClassValue, clsx } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

const customTWMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "webTitle",
        "h1-sb",
        "h1-m",
        "h2-b",
        "h2-sb",
        "h2-m",
        "h2-r",
        "h3-sb",
        "h3-m",
        "h3-r",
        "h4-m",
        "h4-r"
      ]
    }
  }
})

export function cn(...inputs: ClassValue[]) {
  return customTWMerge(clsx(inputs))
}
