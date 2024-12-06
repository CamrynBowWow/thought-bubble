'use client';

import { MenuItems, SidebarItems } from '@/constants';
import { Button } from './ui/button';
import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarSeparator,
	useSidebar,
} from './ui/sidebar';
import { SidebarClose } from 'lucide-react';
import Link from 'next/link';
import UserIcon from './UserIcon';

const AppSidebar = () => {
	const { toggleSidebar } = useSidebar();

	return (
		<Sidebar side='right' variant='floating' collapsible='offcanvas'>
			<SidebarHeader className='p-4 flex-row justify-between items-center'>
				<Button onClick={toggleSidebar} className='bg-gray-default [&_svg]:size-5 p-2 duration-500'>
					<SidebarClose className='rotate-180' />
				</Button>
				<UserIcon style='rounded-full h-[38px] w-[38px] bg-gray-default [&_svg]:size-5 pointer-events-none' />
			</SidebarHeader>
			<SidebarSeparator className='bg-black' />
			<SidebarContent className='gap-4 mt-2 pt-1'>
				<SidebarMenu className='gap-2 px-2'>
					{MenuItems.map((value, index) => (
						<SidebarMenuItem key={index}>
							<SidebarMenuButton className='py-5 hover:bg-secondary-light transition-colors duration-300'>
								<Link
									href={value.url}
									tabIndex={-1}
									className='flex gap-3 items-center text-sm p-1 [&_svg]:size-4'
								>
									<value.icon />
									<span>{value.title}</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
				<SidebarSeparator className='bg-black' />
				<SidebarMenu className='gap-2 px-2'>
					{SidebarItems.map((value, index) => (
						<SidebarMenuItem key={index}>
							<SidebarMenuButton className='py-5 hover:bg-secondary-light transition-colors duration-300'>
								<Link
									href={value.url}
									tabIndex={-1}
									className='flex gap-3 items-center text-sm p-1 [&_svg]:size-4'
								>
									<value.icon />
									<span>{value.title}</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarContent>
		</Sidebar>
	);
};

export default AppSidebar;
