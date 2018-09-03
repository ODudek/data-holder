import { isEmpty } from 'lodash';
import { Request } from 'express';

export const isValidPost = (req: Request): boolean => !isEmpty(req.body.postId);
