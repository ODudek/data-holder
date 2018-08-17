import express from 'express';
import bodyParser from 'body-parser';
import { UserRoutes } from './routes/user';
import mongoose from 'mongoose';
import { Config } from './config/api.conf';
import cors from 'cors';

const options = {
    connectTimeoutMS: 3000,
    socketTimeoutMS: 3000,
    useNewUrlParser: true,
};

export class App {

    public app: express.Application;
    public userRoute: UserRoutes = new UserRoutes();
    public mongoUrl: string = Config.mongoURL;

    constructor() {
        this.app = express();
        this.config();
        this.userRoute.routes(this.app);
        this.mongoSetup();
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
        this.app.options('*', cors());
    }

    private mongoSetup(): void{
        (<any>mongoose).Promise = global.Promise;
        mongoose
        .connect(this.mongoUrl, options)
        .then(() => {
            console.log('Connected!');
        })
        .catch((err: Error) => {
            console.log('Not connected, ERROR! ', err);
        });
    }

}
