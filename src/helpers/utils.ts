import { map, capitalize } from 'lodash';
import { IObj, MyArray } from 'types';

export const perPage = 10;

export const getIds = <T>(array: T[], idName: string) => map(array, (element: IObj) => element[idName]);

export const getRangeOfArray = (array: MyArray, page: number): MyArray =>
    array.slice(page * perPage, (page * perPage) + perPage);

export const makeSentance = (sentance: string): string => {
    const array = sentance.match(/[A-Z][a-z]+/g);
    return capitalize(array!.join(' '));
};
