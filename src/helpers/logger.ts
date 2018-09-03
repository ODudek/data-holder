import chalk from 'chalk';
import { makeSentance } from './utils';
// tslint:disable:no-console

export const logger = (message: string): void => console.log(chalk.magenta(message));

export const errorLogger = (message: string, typeError?: string): void => {
    if (typeError) {
        console.log(`${chalk.red(makeSentance(typeError))}: ${message}`);
    } else {
        console.log(chalk.red(message));
    }
};
