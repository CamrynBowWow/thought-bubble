import Link from 'next/link';
import { MenuItems } from '@/constants';

const HeaderLink = () => {
	return (
		<div className='hidden sm:flex'>
			<ul className='flex gap-2 sm:gap-5'>
				{MenuItems.map((value, index) => (
					<li key={index} className='header-link'>
						<Link href={value.url}>{value.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default HeaderLink;
