/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'xs': '424px',
			...defaultTheme.screens,
		  },
		extend: {
			colors: {
				background: ['#4444'],
				primary: ['#F1362A'],
				secondary: ['#18181B'],
				accent: ['#AC1694'],
			},
			fontFamily: {
				sans: ["Kanit", "sans-serif"],
				serif: ["'Libre Barcode 39'", "cursive"],
			  },
			}
		},
	plugins: [ require('autoprefixer'), require('cssnano'), ('@tailwindcss/typography')],
}
