import { Request } from 'express';
import { PhotoSchema } from 'models/photoSchema';
import { model } from 'mongoose';
import { IPhoto } from 'types';
import { getIds } from 'helpers/utils';
import { sample, isEmpty } from 'lodash';
import { Response } from 'express';

const Photo = model('Photo', PhotoSchema);

export const photoRandomId = (res: Response): void => {
	Photo.find((error: Error, photos: IPhoto[]) => {
		if (error) {
			res.status(404).json({ message: 'Cannot find any post!' });
		}
		const IdsArray = getIds(photos, 'postId');
		res.status(200).json({ photoId: sample(IdsArray) });
	});
};

export const isValidPhoto = (req: Request): boolean => !isEmpty(req.body.photoId);
