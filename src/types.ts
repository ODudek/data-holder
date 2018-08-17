import { DotenvResult } from 'dotenv';

export interface IConfig {
    mongoURL: string;
}

export interface IEnv extends DotenvResult {
    USER: string;
    PASSWORD: string;
}
