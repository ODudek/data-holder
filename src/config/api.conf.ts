import { TConfig } from './../types';
const env = require('dotenv').config();

export const Config: TConfig  = {
    mongoURL: `mongodb://${env.USER}:${env.PASSWORD}@ds125272.mlab.com:25272/placeholder`,
}
