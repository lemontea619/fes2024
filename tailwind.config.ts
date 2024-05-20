import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", flowbite.content()],
  theme: {
    extend: {
      height: {
        screen: "100svh",
      },
      fontFamily: {
        josefinSlab: ["var(--font-josefinSlab)"],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
