type ContentProps = {
	title: string;
	content: {
		subTitle: string;
		desc: string;
	}[];
};

const Content = ({ title, content }: ContentProps) => {
	return (
		<div className='w-full flex flex-col h-[80%] gap-4 sm:gap-[40px] items-center text-center'>
			<h1 className='font-martelSansFont font-light text-2xl md:text-3xl sm:text-2xl'>{title}</h1>
			<div className='overflow-auto h-full flex flex-col gap-8 no-scrollbar scroll-smooth p-2'>
				{content.map((value, index) => (
					<div className='flex flex-col gap-2' key={index}>
						<h2 className='font-milongaFont text-base sm:text-lg md:text-xl'>{value.subTitle}</h2>
						<p className='font-lancelotFont text-lg md:text-xl subpixel-antialiased'>
							{value.desc}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Content;
