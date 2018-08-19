import { App } from 'app';

const DEV_PORT = 3100;
const port = process.env.PORT || DEV_PORT;
// tslint:disable-next-line:no-unused-expression
new App(port);
