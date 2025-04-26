import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Atkinson", ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: "full",
            h1: { scrollMarginTop: theme('spacing.24') },
            h2: { scrollMarginTop: theme('spacing.24') },
            h3: { scrollMarginTop: theme('spacing.24') },
            h4: { scrollMarginTop: theme('spacing.24') },
            h5: { scrollMarginTop: theme('spacing.24') },
            h6: { scrollMarginTop: theme('spacing.24') },
          },
        },
      }),
      rotate: {
        "45": "45deg",
        "135": "135deg",
        "225": "225deg",
        "315": "315deg",
      },
      animation: {
        twinkle: "twinkle 2s ease-in-out forwards",
        meteor: "meteor 3s ease-in-out forwards",
      },
      keyframes: {
        twinkle: {
          "0%": {
            opacity: 0,
            transform: "rotate(0deg)"
          },
          "50%": {
            opacity: 1,
            transform: "rotate(180deg)"
          },
          "100%": {
            opacity: 0,
            transform: "rotate(360deg)"
          },
        },
        meteor: {
          "0%": {
            opacity: 0,
            transform: "translateY(200%)"
          },
          "50%": {
            opacity: 1
          },
          "100%": {
            opacity: 0,
            transform: "translateY(0)"
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
