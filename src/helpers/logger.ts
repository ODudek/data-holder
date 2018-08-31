import { makeSentance } from './utils';
import chalk from 'chalk';
// tslint:disable:no-console

export const logger = (message: string) => console.log(chalk.magenta(message));

export const errorLogger = (message: string, typeError?: string) => {
    if (typeError) {
        console.log(`${chalk.red(makeSentance(typeError))}: ${message}`);
    } else {
        console.log(chalk.red(message));
    }
};
