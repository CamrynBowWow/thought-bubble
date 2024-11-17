import { MenuIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Header = () => {
	return (
		<header className='max-w-7xl w-full h-[100px] sm:h-[180px] flex justify-center items-center relative px-10 p-3 lg:px-3'>
			<div className='w-[48px] h-[48px] absolute rounded-full bg-defaultGray sm:flex hidden items-center justify-center right-[20px] md:right-[70px]'>
				<UserIcon />
			</div>
			<div className='absolute sm:hidden flex w-[42px] h-[42px] bg-defaultGray right-7 top-7 items-center justify-center rounded-[5px]'>
				<MenuIcon />
			</div>
			<div className='hidden sm:flex'>
				<ul className='flex gap-2 sm:gap-5'>
					<li className='header-link'>
						<Link href='/'>Home</Link>
					</li>
					<li className='header-link'>
						<Link href='/'>Poems</Link>
					</li>
					<li className='header-link'>
						<Link href='/'>Stories</Link>
					</li>
					<li className='header-link'>
						<Link href='/'>My Creations</Link>
					</li>
					<li className='header-link'>
						<Link href='/'>Favorites</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
