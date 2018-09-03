import { DotenvResult } from 'dotenv';
import { Document } from 'mongoose';

export interface IConfig {
    mongoURL: string;
}

export interface IEnv extends DotenvResult {
    parsed: {
        USER: string;
        PASSWORD: string;
    };
}

export interface IUser {
    address: {
        city: string,
        street: string,
        zipcode: string,
    };
    birthDay: string;
    company: {
        name: string,
    };
    createdDate: Date;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    username: string;
    website: string;
    userId: string;
}

export interface IPost {
    content: string;
    title: string;
    userId: string;
}

export interface IObj {
	[key: string]: string;
}

export interface IPhoto {
    photoId: string;
    photoUrl: string;
    thumbUrl: string;
    title: string;
}

export type TDoc = Document | null;

export type MyArray = Array<IUser | IPost | IPhoto>;
