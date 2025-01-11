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
          DEFAULT: "#CA3D7D",
          100: "#FFBED7",
          200: "#FF7CAE",
          300: "#FF3791",
          400: "#CA3D7D",
          500: "#932D5B",
          600: "#5D203B"
        },
        white: "#F7F7F7",
        dark: {
          DEFAULT: "#171617"
        }
      }
    }
  },
  plugins: []
} satisfies Config
