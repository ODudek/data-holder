import { config } from 'dotenv';
import { IConfig, IEnv } from 'types';
const env = config({ path: 'src/config/.env'}) as IEnv;

export const Config: IConfig  = {
    mongoURL: `mongodb://${env.parsed.USER}:${env.parsed.PASSWORD}@ds125272.mlab.com:25272/placeholder`,
};
