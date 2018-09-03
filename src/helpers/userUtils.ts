import { IUser } from 'types';
import { isEmpty } from 'lodash';
import { Request } from 'express';

export const isValidUser = (req: Request, user: IUser): boolean =>
    !isEmpty(req.body.email) && !isEmpty(req.body.username) && !isEmpty(req.body.userId) && isEmpty(user);
