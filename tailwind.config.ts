import type { Config } from "tailwindcss"
import { COLORS } from "./src/styles/colors"

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
        gray: COLORS.GRAY,
        dark: COLORS.DARK,
        "gray-scale": {
          100: COLORS.GRAY_SCALE_100,
          200: COLORS.GRAY_SCALE_200,
          300: COLORS.GRAY_SCALE_300,
          400: COLORS.GRAY_SCALE_400,
          500: COLORS.GRAY_SCALE_500,
          600: COLORS.GRAY_SCALE_600,
          700: COLORS.GRAY_SCALE_700,
          800: COLORS.GRAY_SCALE_800,
          900: COLORS.GRAY_SCALE_900
        }
      }
    }
  },
  plugins: []
} satisfies Config
