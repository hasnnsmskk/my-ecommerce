/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: ['bg-red-500',
    'bg-orange-500',
    'bg-green-500',
    'bg-blue-500',
    'bg-purple-500',
  ],
}

