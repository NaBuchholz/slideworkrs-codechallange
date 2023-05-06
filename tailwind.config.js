/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: { slideworks: { 700: '#726BEA', 900: '#4F46E5' } },
			fontFamily: { serif: ['Montserrat'] },
		},
	},
	plugins: [],
};
