import React from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../ui/carousel';
import { MainPageContent } from '@/constants';
import Content from './Content';

const HomeCarousel = () => {
	return (
		<section className='w-full no-scrollbar overflow-hidden flex justify-center p-1 pb-10'>
			<Carousel className='px-0 sm:px-7'>
				<CarouselContent className='w-[300px] lg:w-[750px] md:w-[550px] sm:w-[420px] h-screen'>
					{MainPageContent.map((value, index) => (
						<CarouselItem key={index}>
							<Content title={value.title} content={value.content} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className='carousel-buttons' />
				<CarouselNext className='carousel-buttons' />
			</Carousel>
		</section>
	);
};

export default HomeCarousel;
