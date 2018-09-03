import { getRangeOfArray, perPage } from 'helpers/utils';
import { IPhoto } from 'types';
import { isEmpty } from 'lodash';
import { TDoc } from 'types';
import { Request, Response } from "express";
import { PhotoSchema } from "models/photoSchema";
import { model } from "mongoose";
import { photoRandomId } from 'helpers/photoUtils';

const Photo = model('Photo', PhotoSchema);

export class PhotoController {

    public getUniqueId(req: Request, res: Response): void {
        Photo.find((err: Error, photos: IPhoto[]) => {
            if (err) {
				res.status(404).send({ message: 'Cannot photos!' });
            }
            res.status(200).send({ photoId: Number(photos.length) + 1 });
        });
    }

    public getRandomPhotoId(req: Request, res: Response): void {
        photoRandomId(res);
    }

	public deletePhoto(req: Request, res: Response): void {
        Photo.findOneAndRemove({ photoId: req.params.postId }, (err: Error, photo: TDoc) => {
            if (err) {
                res.status(404).send({ message: 'Cannot find and remove photo!', err });
            }
            if (isEmpty(photo)) {
                res.status(404).send({message: 'Photo doesn\'t exists!' });
            } else {
                res.status(200).send({ message: 'Removed photo!', data: photo });
            }
        });
	}

	public updatePhoto(req: Request, res: Response): void {
        Photo.findOneAndUpdate({ photoId: req.params.photoId }, req.body, { new: true }, (err: Error, photo: TDoc) => {
            if (err) {
                res.status(404).send({ message: 'Cannot find and update photo!', err });
            }
            if (isEmpty(photo)) {
                res.status(404).send({ message: 'Photo doesn\'t exists!' });
            } else {
                res.status(200).send({ message: 'Photo updated!', data: photo });
            }
        });
	}

	public getPhotoWithId(req: Request, res: Response): void {
        Photo.findOne({ postId: req.params.postId }, (err: Error, photo: TDoc) => {
            if (err) {
                res.status(404).send({ message: 'Cannot find photo', err });
            }
            if (isEmpty(photo)) {
                res.status(404).send({ message: 'Photo doesn\'t exists!' });
            } else {
                res.status(200).send(photo);
            }
        });
	}

	public addPhoto(req: Request, res: Response): void {
        const newPhoto = new Photo(req.body);
        newPhoto.save((err: Error, photo: TDoc) => {
            if (err) {
                res.status(404).send({ message: 'Cannot save new Photo', err });
            }
            res.status(200).send(photo);
        });
	}

	public getPhotos(req: Request, res: Response): void {
        const page = req.query.page;
        if (!isEmpty(page)) {
            Photo.find((err: Error, photos: IPhoto[]) => {
                if (err) {
                    res.status(404).send({ message: 'Cannot get photos', err });
                }
                const photosFromQuery = getRangeOfArray(photos, page);
                res.status(200).send({
                    data: photosFromQuery,
                    page,
                    perPage,
                });
            });
        } else {
            Photo.find((err: Error, photos: IPhoto[]) => {
                if (err) {
                    res.status(404).send({ message: 'Cannot get photos', err });
                }
                res.status(200).send(photos);
            });
        }
	}
}
