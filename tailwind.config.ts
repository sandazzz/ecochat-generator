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
        "base-dark": "#0c192c",
        "gradient-mid": "#1a273a",
        "gradient-light": "#273a4d",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(100vh) scale(0)" },
          "100%": { transform: "translateY(-10vh) scale(1)" },
        },
      },
      animation: {
        float: "float 15s linear infinite",
      },
      boxShadow: {
        "lg-blue":
          "0 0 0 5px rgba(79, 195, 220, 0.25), 0 0 25px rgba(79, 195, 220, 1), 0 0 50px rgba(79, 195, 220, 1)",
        "lg-pink":
          "0 0 0 5px rgba(255, 45, 117, 0.25), 0 0 25px rgba(255, 45, 117, 1), 0 0 50px rgba(255, 45, 117, 1)",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animated")],
};
export default config;
