import { map } from 'lodash';
import { IUser } from 'types';

export const getUsersIds = (users: IUser[]) => map(users, (user: IUser) => user._id) as string[];
