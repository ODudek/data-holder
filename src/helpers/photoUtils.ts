import { PhotoSchema } from 'models/photoSchema';
import { model } from 'mongoose';
import { IPhoto } from 'types';
import { getIds } from 'helpers/utils';
import { sample } from 'lodash';
import { Response } from 'express';

const Photo = model('Photo', PhotoSchema);

export const photoRandomId = (res: Response): void => {
	Photo.find((error: Error, photos: IPhoto[]) => {
		if (error) {
			res.status(404).send({ message: 'Cannot find any post!' });
		}
		const IdsArray = getIds(photos, 'postId');
		res.status(200).send({ photoId: sample(IdsArray) });
	});
};
