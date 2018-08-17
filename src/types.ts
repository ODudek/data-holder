import { DotenvResult } from 'dotenv';
import { Document } from 'mongoose';

export interface IConfig {
    mongoURL: string;
}

export interface IEnv extends DotenvResult {
    USER: string;
    PASSWORD: string;
}

export interface IUser {
    address: {
        city: string,
        street: string,
        suite: string,
        zipcode: string,
    };
    company: {
        name: string,
    };
    createdDate: Date;
    email: string;
    firstName: string;
    phone: string;
    surname: string;
    username: string;
    website: string;
}

export type TDoc = Document | null;
