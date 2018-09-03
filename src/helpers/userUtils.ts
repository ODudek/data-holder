import { UserSchema } from 'models/userSchema';
import { model } from 'mongoose';
import { IUser } from 'types';
import { getIds } from 'helpers/utils';
import { sample, isEmpty } from 'lodash';
import { Response, Request } from 'express';

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

export const isValidUser = (req: Request, user: IUser): boolean =>
    !isEmpty(req.body.email) && !isEmpty(req.body.username) && !isEmpty(req.body.userId) && isEmpty(user);
