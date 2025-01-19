import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        tasks: "#4EA8DE",
        completed: "#8284FA",
        disabled: "#808080",
      },
      height: {
        200: "12.5rem",
        52: "3.25rem",
      },
      width: {
        736: "46rem",
        52: "3.25rem",
      },
      margin: {
        todo: "4.125rem"
      },
      padding: {
        16.5: "4.125rem"
      },
      backgroundColor: {
        button: "#1E6F9F",
        header: "#0D0D0D",
        main: "#1A1A1A",
        badge: "#333333",
        input: "#262626",
        red: "#FF3B30",
        orange: "#FF9500",
        yellow: "#FFCC00",
        green: "#34C759",
        blue: "#007AFF",
        indigo: "#5856D6",
        purple: "#AF52DE",
        pink: "#FF2D55",
        brown: "#A2845E",
      },
      borderColor: {
        todo: "#333333",
        check: "#4EA8DE"
      },
      fontFamily: {
        main: "inter",
      },
      fontColor: {
        button: "#f2f2f2",
      },
      borderRadius: {
        badge: "999px"
      },
      boxShadow: {
        input: "0px 2px 8px 0px #0000000F"
      },
    },
  },
  plugins: [],
} satisfies Config;
