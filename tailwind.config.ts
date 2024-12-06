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
				secondary: {
					default: '#FFC500',
					light: '#F6BD00',
				},
				third: '#969B61',
				gray: {
					default: '#D9DAD7',
					light: '#D0D0CE',
				},
				background: {
					default: '#F7E5BF',
					light: '#EFDDB8',
					dark: '#CDBE9E',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))',
				},
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
