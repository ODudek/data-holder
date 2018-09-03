import { Request } from 'express';
import { isEmpty } from 'lodash';

export const isValidPhoto = (req: Request): boolean => !isEmpty(req.body.photoId);
