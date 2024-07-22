import { ColorTokens, TypographyTokens } from '@glare-labs/tailwindcss-material-tokens'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{vue,jsx,tsx,ts,js}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    ...ColorTokens.FullTokens,
    ...TypographyTokens.FullTokens,
  ],
}

