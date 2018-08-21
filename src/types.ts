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
    _id?: string;
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
}

export interface IPost {
    content: string;
    title: string;
    userId: string;
}

export type TDoc = Document | null;
