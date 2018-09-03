import { Request } from 'express';
import { isEmpty } from 'lodash';
import { IUser } from 'types';

export const isValidUser = (req: Request, user: IUser): boolean =>
    !isEmpty(req.body.email) && !isEmpty(req.body.username) && !isEmpty(req.body.userId) && isEmpty(user);
