import { Lancelot, Milonga, Martel_Sans, Asul } from 'next/font/google';

export const lancelot = Lancelot({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--font-lancelot',
});

export const milonga = Milonga({
	subsets: ['latin'],
	variable: '--font-milonga',
	weight: ['400'],
});

export const asul = Asul({
	subsets: ['latin'],
	variable: '--font-asul',
	weight: ['400', '700'],
});

export const martelSans = Martel_Sans({
	subsets: ['latin'],
	variable: '--font-martel-sans',
	weight: ['200', '300', '400', '600', '700', '800', '900'],
});
