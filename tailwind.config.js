/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "primary-color": "#1C1D20",
        // "gray-50": "#EFE6E6",
        // "gray-100": "#DFCCCC",
        // "gray-500": "#5E0000",
        // "primary-100": "#FFE1E0",
        // "primary-300": "#FFA6A3",
        // "primary-500": "#FF6B66",
        // "secondary-400": "#FFCD5B",
        // "secondary-500": "#FFC132",
      },
    },
  },
  plugins: [],
}
// #530000