import { UserSchema } from 'models/userSchema';
import { model } from 'mongoose';
import { IUser } from 'types';
import { getIds } from 'helpers/utils';
import { sample } from 'lodash';
import { Response } from 'express';

const User = model('User', UserSchema);

export const userRandomId = (res: Response): void => {
	User.find((error: Error, users: IUser[]) => {
		if (error) {
			res.status(404).json({ message: 'Cannot find any user!' });
		}
		const IdsArray = getIds(users, 'userId');
		res.status(200).json({ userId: sample(IdsArray) });
	});
};
