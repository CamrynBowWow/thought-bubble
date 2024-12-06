'use client';

import { MenuIcon } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import { useSidebar } from '../ui/sidebar';
import HeaderLink from './HeaderLink';
import UserIcon from '../UserIcon';

const Header = () => {
	const { toggleSidebar } = useSidebar();

	return (
		<header className='max-w-7xl w-full h-[100px] sm:h-[180px] flex justify-center items-center relative px-10 p-3 lg:px-3'>
			<UserIcon style='w-[48px] h-[48px] [&_svg]:size-6 absolute rounded-full bg-gray-default sm:flex hidden items-center justify-center right-[20px] md:right-[70px] duration-500' />
			<Button
				onClick={toggleSidebar}
				className='absolute sm:hidden [&_svg]:size-6 flex w-[42px] h-[42px] bg-gray-default right-7 top-7 items-center justify-center rounded-[5px] duration-300'
			>
				<MenuIcon />
			</Button>
			<HeaderLink />
		</header>
	);
};

export default Header;
