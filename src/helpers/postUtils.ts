import { Request } from 'express';
import { isEmpty } from 'lodash';

export const isValidPost = (req: Request): boolean => !isEmpty(req.body.postId);
