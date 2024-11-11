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

declare interface ShortStoryParams {
	user: string;
	id: string;
	title: string;
	shortStoryText: string;
	datePublished: Date;
	dateEdited: Date;
}
