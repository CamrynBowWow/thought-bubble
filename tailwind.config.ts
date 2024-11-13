import type { Config } from 'tailwindcss';
import tailwindAnimate from 'tailwindcss-animate';

export default {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#F18E3F',
				secondary: '#FFC500',
				third: '#969B61',
				defaultGray: '#D9DAD7',
				bgMain: '#F7E5BF',
			},
			fontFamily: {
				lancelotFont: ['var(--font-lancelot)'],
				milongaFont: ['var(--font-milonga)'],
				asulFont: ['var(--font-asul)'],
				martelSansFont: ['var(--font-martel-sans)'],
			},
		},
	},
	plugins: [tailwindAnimate],
} satisfies Config;
