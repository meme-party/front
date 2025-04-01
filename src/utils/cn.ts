import { type ClassValue, clsx } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

const customTWMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-webTitle",
        "text-h1-sb",
        "text-h1-m",
        "text-h2-b",
        "text-h2-sb",
        "text-h2-m",
        "text-h2-r",
        "text-h3-sb",
        "text-h3-m",
        "text-h3-r",
        "text-h4-m",
        "text-h4-r"
      ]
    }
  }
})

export function cn(...inputs: ClassValue[]) {
  return customTWMerge(clsx(inputs))
}
