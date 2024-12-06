declare interface CreateUserParams {
	userId: string;
	userName: string;
	firstName: string;
	lastName: string;
	password: string;
	email: string;
	phone: string;
	dateOfBirth: Date;
	dateRegistered: Date;
}

declare interface PoemParams {
	user: string;
	id: string;
	title: string;
	poemText: string;
	datePublished: Date;
	dateEdited: Date;
}

declare interface StoryParams {
	user: string;
	id: string;
	title: string;
	StoryText: string;
	datePublished: Date;
	dateEdited: Date;
}

declare type MainContent = {
	title: string;
	content: {
		subTitle: string;
		desc: string;
	}[];
};

declare type MenuItem = {
	title: string;
	url: string;
	icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
};
