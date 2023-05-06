/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: { slideworks: '#726BEA' },
			opacity: {
				80: '.80',
			},
			fontFamily: { serif: ['Montserrat'] },
		},
	},
	plugins: [],
};
