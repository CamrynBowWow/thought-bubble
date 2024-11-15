type ContentProps = {
	title: string;
	content: {
		subTitle: string;
		desc: string;
	}[];
};

const Content = ({ title, content }: ContentProps) => {
	return (
		<div className='w-full h-full flex flex-col gap-[40px] items-center text-center'>
			<h1 className='font-martelSansFont font-light text-3xl'>{title}</h1>
			<div className='h-full overflow-auto flex flex-col gap-8 no-scrollbar scroll-smooth p-2'>
				{content.map((value, index) => (
					<div className='flex flex-col gap-2' key={index}>
						<h2 className='font-milongaFont text-xl'>{value.subTitle}</h2>
						<p className='font-lancelotFont text-xl'>{value.desc}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Content;
