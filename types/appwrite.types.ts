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
}

export interface Poem extends Models.Document {
	user: User;
	id: string;
	title: string;
	categories: string[];
	poemText: string;
	datePublished: Date;
	dateEdited: Date;
}

export interface Story extends Models.Document {
	user: User;
	id: string;
	title: string;
	categories: string[];
	StoryText: string;
	wordCount: number;
	datePublished: Date;
	dateEdited: Date;
}
