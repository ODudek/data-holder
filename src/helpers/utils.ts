import { map } from 'lodash';
import { IObj, MyArray } from 'types';

export const perPage = 10;

export const getIds = <T>(array: T[], idName: string) => map(array, (element: IObj) => element[idName]);

export const getRangeOfArray = (array: MyArray, page: number) => array.slice(page * perPage, (page * perPage) + perPage);
