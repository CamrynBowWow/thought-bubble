import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { asul, lancelot, martelSans, milonga } from './fonts/fonts';
import { SidebarProvider } from '@/components/ui/sidebar';
import AppSidebar from '@/components/AppSidebar';

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
					'antialiased min-h-screen bg-background-default',
					martelSans.variable,
					lancelot.variable,
					milonga.variable,
					asul.variable
				)}
			>
				<SidebarProvider defaultOpen={false}>
					<AppSidebar />
					{children}
				</SidebarProvider>
			</body>
		</html>
	);
}
