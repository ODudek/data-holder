import { config } from 'dotenv';
import { IConfig, IEnv } from 'types';
const env = config({ path: 'config/.env'}) as IEnv;

export const Config: IConfig  = {
    mongoURL: `mongodb://${env.USER}:${env.PASSWORD}@ds125272.mlab.com:25272/placeholder`,
};
