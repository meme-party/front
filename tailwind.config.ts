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
      dropShadow: {
        toast: "0 -10px 24px rgba(0, 0, 0, 0.6)",
        thumbnail: "0 2px 4px rgba(203, 199, 203, 0.2)"
      },
      colors: {
        primary: {
          DEFAULT: COLORS.PRIMARY,
          300: COLORS.PRIMARY_300,
          400: COLORS.PRIMARY_400,
          500: COLORS.PRIMARY_500,
          600: COLORS.PRIMARY_600
        },
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
        },
        semantic: COLORS.SEMANTIC
      },
      fontWeight: {
        bold: "700",
        semibold: "600",
        medium: "500",
        regular: "400"
      },
      fontSize: {
        webTitle: ["28px", { fontWeight: 600 }],
        "h1-sb": ["20px", { fontWeight: 600 }],
        "h1-m": ["20px", { fontWeight: 500 }],
        "h2-b": ["16px", { fontWeight: 700 }],
        "h2-sb": ["16px", { fontWeight: 600 }],
        "h2-m": ["16px", { fontWeight: 500 }],
        "h2-r": ["16px", { fontWeight: 400 }],
        "h3-sb": ["14px", { fontWeight: 600 }],
        "h3-m": ["14px", { fontWeight: 500 }],
        "h3-r": ["14px", { fontWeight: 400 }],
        "h4-m": ["12px", { fontWeight: 500 }],
        "h4-r": ["12px", { fontWeight: 400 }]
      }
    }
  },
  plugins: []
} satisfies Config
