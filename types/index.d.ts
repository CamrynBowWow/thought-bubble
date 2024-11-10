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
	poemText: string;
	datePublished: Date;
	dateEdited: Date;
}

declare interface StoryParams {
	user: string;
	id: string;
	shortStoryText: string;
	datePublished: Date;
	dateEdited: Date;
}
