import { TDoc } from './../types';
import { IUser } from 'types';
import { model } from 'mongoose';
import { Response, Request } from 'express';
import { UserSchema } from '../models/userSchema';

const User = model('User', UserSchema);

export class UserController {

    public getUsers(req: Request, res: Response) {
        try {
            User.find({}, (err: Error, users: IUser[]) => {
                if (err) {
                    res.status(404).send(err);
                }
                res.status(200).json(users);
            });
        } catch (e) {
            console.log(e);
        }
    }

    public getUserWithId(req: Request, res: Response) {
        User.findById(req.params.userId, (err: Error, user: IUser) => {
            if (err) {
                res.status(404).send(err);
            }
            res.status(200).json(user);
        });
    }

    public updateUser(req: Request, res: Response) {
        User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true },
            (err: Error, doc: TDoc, user: IUser) => {
            if (err) {
                res.status(404).send(err);
            }
            res.status(200).json(user);
        });
    }

    public deleteUser(req: Request, res: Response) {
        User.remove({ _id: req.params.userId }, (err: Error) => {
            if (err) {
                res.status(404).send(err);
            }
            res.status(200).json({ message: 'Successfully deleted user!'});
        });
    }
}