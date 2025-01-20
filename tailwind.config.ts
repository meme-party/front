import { COLORS } from "./src/styles/colors"
import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1080px",
        xl: "1440px"
      },
      colors: {
        // Todo 필요한 color 들 추가
        primary: {
          DEFAULT: COLORS.PRIMARY,
          100: COLORS.PRIMARY_100,
          200: COLORS.PRIMARY_200,
          300: COLORS.PRIMARY_300,
          400: COLORS.PRIMARY_400,
          500: COLORS.PRIMARY_500,
          600: COLORS.PRIMARY_600
        },
        white: COLORS.WHITE,
        dark: {
          DEFAULT: COLORS.DARK
        }
      }
    }
  },
  plugins: []
} satisfies Config
