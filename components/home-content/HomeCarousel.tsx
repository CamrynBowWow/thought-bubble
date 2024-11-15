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
		<section className='w-full flex justify-center p-1'>
			<Carousel>
				<CarouselContent className='w-[750px] h-[700px]'>
					{MainPageContent.map((value, index) => (
						<CarouselItem key={index}>
							<Content title={value.title} content={value.content} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className='bg-secondary border-gray-100' />
				<CarouselNext className='bg-secondary border-gray-100' />
			</Carousel>
		</section>
	);
};

export default HomeCarousel;
