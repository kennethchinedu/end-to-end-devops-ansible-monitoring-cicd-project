import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          400: "#68D391"
        },
        gray: {
          100: "#8F8F8F",
          200: "#A7A7A7",
          300: "#E7E7E7"
        },
        purple: {
          100: "#4C0645",
          200: "#802978",
          300: "#D674CD",
          400: "#98064C"
        },
        yellow: {
          100: "#FFDF85"
        },
        boxShadow: {
          custom: '0px 1px 4px 0px #00000029',
        },
      },
    },
  },
  plugins: [],
};
export default config;
