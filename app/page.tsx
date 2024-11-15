import Header from '@/components/Header';
import HomeCarousel from '@/components/home-content/HomeCarousel';
import Image from 'next/image';

export default function Home() {
	return (
		<div className='flex flex-col h-screen max-h-screen items-center relative overflow-hidden'>
			<Header />
			<HomeCarousel />
			<Image
				src='/assets/svgs/home_leaves_left.svg'
				className='absolute left-[-120px] top-[50px] lg:left-[-7px] lg:top-[50px] -z-10 lg:scale-100 scale-50'
				alt='leaves'
				width={500}
				height={700}
			/>
			<Image
				src='/assets/svgs/home_leaves_right.svg'
				className='absolute bottom-[-50px] right-[-35px] lg:right-0 lg:bottom-0 -z-10 lg:scale-100 scale-75'
				alt='leaves'
				width={323}
				height={548}
			/>
		</div>
	);
}
