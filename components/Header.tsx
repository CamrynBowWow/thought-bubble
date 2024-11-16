import { UserIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Header = () => {
	return (
		<header className='max-w-7xl w-full h-[180px] flex justify-center items-center relative px-10 p-3 lg:px-3'>
			<div className='w-[54px] h-[54px] absolute rounded-full bg-defaultGray flex items-center justify-center right-[70px]'>
				<UserIcon />
			</div>
			<div>
				<ul className='flex gap-5'>
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
