import { map } from 'lodash';
import { UserSchema } from 'models/userSchema';
import { model } from 'mongoose';
import { IUser, IPost } from 'types';

const User = model('User', UserSchema);
export const perPage = 10;

export const getUsersIds = (users: IUser[]) => map(users, (user: IUser) => user._id) as string[];

export const usersWithIds = (callback: (uniqueIds: string[]) => void): void => {
	User.find((error: Error, users: IUser[]) => {
		if (error) {
			throw Error('usersWithIds');
		}
		const uniqueIds = getUsersIds(users);
		callback(uniqueIds);
	});
};

export const getRangeOfArray = (array: Array<IUser | IPost>, page: number) => array.slice(page * perPage, (page * perPage) + perPage);
