import { Request } from 'express';

export const isValidPhoto = (req: Request): boolean => req.body.photoId;
