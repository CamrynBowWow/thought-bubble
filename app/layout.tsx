import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { asul, lancelot, martelSans, milonga } from './fonts/fonts';

export const metadata: Metadata = {
	title: 'Thought-Bubble',
	description: 'The journey begins where it ends',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={cn(
					'antialiased min-h-screen bg-bgMain',
					martelSans.variable,
					lancelot.variable,
					milonga.variable,
					asul.variable
				)}
			>
				{children}
			</body>
		</html>
	);
}
