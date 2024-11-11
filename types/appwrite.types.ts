import { Models } from 'node-appwrite';

export interface User extends Models.Document {
	userId: string;
	userName: string;
	firstName: string;
	lastName: string;
	password: string;
	email: string;
	phone: string;
	dateOfBirth: Date;
	dateRegistered: Date;
	passwordDateChanged: Date;
	userInfoDateEdited: Date;
	likedPoems: Poem[];
	favoritePoems: Poem[];
	likedStories: Story[];
	favoriteStories: Story[];
	likedShortStories: ShortStory[];
	favoriteShortStories: ShortStory[];
}

export interface Poem extends Models.Document {
	user: User;
	id: string;
	title: string;
	poemText: string;
	datePublished: Date;
	dateEdited: Date;
}

export interface Story extends Models.Document {
	user: User;
	id: string;
	title: string;
	StoryText: string;
	datePublished: Date;
	dateEdited: Date;
}

export interface ShortStory extends Models.Document {
	user: User;
	id: string;
	title: string;
	shortStoryText: string;
	datePublished: Date;
	dateEdited: Date;
}
