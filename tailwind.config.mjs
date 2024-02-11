/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'blue': {
					'50': '#e8f5ff',
					'100': '#d5edff',
					'200': '#b3dbff',
					'300': '#85c1ff',
					'400': '#5698ff',
					'500': '#2f6eff',
					'600': '#0c3fff',
					'700': '#0033ff',
					'800': '#0631cd',
					'900': '#10329f',
					'950': '#0a1c5c',
					},
				'violet-eggplant': {
					'50': '#fbf3ff',
					'100': '#f8e7ff',
					'200': '#f0ceff',
					'300': '#e8a7ff',
					'400': '#db72ff',
					'500': '#c83df8',
					'600': '#af1ddc',
					'700': '#9114b3',
					'800': '#7b1395',
					'900': '#67157a',
					'950': '#430052',
				},
			}
		},
	},
	plugins: [],
}
