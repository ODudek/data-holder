import { App } from './src/app';

const DEV_PORT = 3100;
const port = process.env.PORT || DEV_PORT;
const app = new App().app;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
