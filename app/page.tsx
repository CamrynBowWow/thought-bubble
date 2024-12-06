import Header from '@/components/header/Header';
import HomeCarousel from '@/components/home-content/HomeCarousel';
import Image from 'next/image';

export default function Home() {
	return (
		<main className='flex flex-col w-full h-screen max-h-screen items-center relative'>
			<Header />
			<HomeCarousel />
			<Image
				src='/assets/svgs/home_leaves_left.svg'
				className='absolute left-[-120px] top-[0px] lg:left-[-20px] lg:top-[50px] -z-10 lg:scale-90 scale-50 opacity-40 lg:opacity-100 md:opacity-75'
				alt='leaves'
				width={500}
				height={700}
			/>
			<Image
				src='/assets/svgs/home_leaves_right.svg'
				className='absolute bottom-[-50px] right-[-35px] lg:right-0 lg:bottom-0 -z-10 scale-50 lg:scale-100 md:scale-75 lg:opacity-100 md:opacity-75 opacity-40'
				alt='leaves'
				width={323}
				height={548}
			/>
		</main>
	);
}
