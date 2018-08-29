import { UserSchema } from 'models/userSchema';
import { model } from 'mongoose';
import { IUser } from 'types';
import { getIds } from 'helpers/utils';

const User = model('User', UserSchema);

export const usersWithIds = (callback: (uniqueIds: boolean[]) => void): void => {
	User.find((error: Error, users: IUser[]) => {
		if (error) {
			throw Error('usersWithIds');
		}
		const uniqueIds = getIds(users, 'userId');
		callback(uniqueIds);
	});
};