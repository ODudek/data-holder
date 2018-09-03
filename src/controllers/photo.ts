import { Request, Response } from 'express';
import { isValidPhoto } from 'helpers/photoUtils';
import { getIds, getRangeOfArray, perPage  } from 'helpers/utils';
import { isEmpty, sample } from 'lodash';
import { PhotoSchema } from 'models/photoSchema';
import { model } from 'mongoose';
import { IPhoto, TDoc } from 'types';

const Photo = model('Photo', PhotoSchema);

export class PhotoController {

    public getUniqueId(req: Request, res: Response): void {
        Photo.find((err: Error, photos: IPhoto[]) => {
            if (err) {
				res.status(404).json({ message: 'Cannot photos!' });
            }
            res.status(200).json({ photoId: Number(photos.length) + 1 });
        });
    }

    public getRandomPhotoId(req: Request, res: Response): void {
        Photo.find((err: Error, photos: IPhoto[]) => {
            if (err) {
                res.status(404).json({ message: 'Cannot find any post!', err });
            }
            const IdsArray = getIds(photos, 'postId');
            res.status(200).json({ photoId: sample(IdsArray) });
        });
    }

	public deletePhoto(req: Request, res: Response): void {
        Photo.findOneAndRemove({ photoId: req.params.postId }, (err: Error, photo: TDoc) => {
            if (err) {
                res.status(404).json({ message: 'Cannot find and remove photo!', err });
            }
            if (isEmpty(photo)) {
                res.status(404).json({message: 'Photo doesn\'t exists!' });
            } else {
                res.status(200).json({ message: 'Removed photo!', data: photo });
            }
        });
	}

	public updatePhoto(req: Request, res: Response): void {
        Photo.findOneAndUpdate({ photoId: req.params.photoId }, req.body, { new: true }, (err: Error, photo: TDoc) => {
            if (err) {
                res.status(404).json({ message: 'Cannot find and update photo!', err });
            }
            if (isEmpty(photo)) {
                res.status(404).json({ message: 'Photo doesn\'t exists!' });
            } else {
                res.status(200).json({ message: 'Photo updated!', data: photo });
            }
        });
	}

	public getPhotoWithId(req: Request, res: Response): void {
        Photo.findOne({ postId: req.params.postId }, (err: Error, photo: TDoc) => {
            if (err) {
                res.status(404).json({ message: 'Cannot find photo', err });
            }
            if (isEmpty(photo)) {
                res.status(404).json({ message: 'Photo doesn\'t exists!' });
            } else {
                res.status(200).json(photo);
            }
        });
	}

	public addPhoto(req: Request, res: Response): void {
        if (isValidPhoto(req)) {
            const newPhoto = new Photo(req.body);
            newPhoto.save((err: Error, photo: TDoc) => {
                if (err) {
                    res.status(404).json({ message: 'Cannot save new Photo', err });
                }
                res.status(200).json(photo);
            });
        } else {
            res.status(404).json({ message: 'Check all required fields!' });
        }
	}

	public getPhotos(req: Request, res: Response): void {
        const page = req.query.page;
        if (!isEmpty(page)) {
            Photo.find((err: Error, photos: IPhoto[]) => {
                if (err) {
                    res.status(404).json({ message: 'Cannot get photos', err });
                }
                const photosFromQuery = getRangeOfArray(photos, page);
                res.status(200).json({
                    data: photosFromQuery,
                    page,
                    perPage,
                });
            });
        } else {
            Photo.find((err: Error, photos: IPhoto[]) => {
                if (err) {
                    res.status(404).json({ message: 'Cannot get photos', err });
                }
                res.status(200).json(photos);
            });
        }
	}
}
