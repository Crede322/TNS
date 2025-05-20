import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}", // укажи, где Tailwind должен искать классы
  ],
  theme: {
    extend: {
      colors: {
        "my-color": "#0080f5", // если хочешь использовать text-my-color
      },
    },
  },
  plugins: [],
};

export default config;
