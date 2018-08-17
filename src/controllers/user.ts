import { model } from 'mongoose';
import { Request, Response } from 'express';
import { UserSchema } from '../models/userSchema';

const User = model('User', UserSchema);

export class UserController {

    public getUsers (req: Request, res: Response) {
        console.log(req)
        User.find({}, (err: Error, users: Object[]) => {
            if(err) {
                res.status(404).send(err);
            }
            res.status(200).json(users);
        });

    }

    public getUserWithId (req: Request, res: Response) {
        User.findById(req.params.userId, (err: Error, user: Object) => {
            if(err) {
                res.status(404).send(err);
            }
            res.status(200).json(user);
        });
    }

    public updateUser (req: Request, res: Response) {
        User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, (err: Error, user: any) => {
            if (err) {
                res.status(404).send(err);
            }
            res.status(200).json(user);
        });
    }

    public deleteUser (req: Request, res: Response) {
        User.remove({ _id: req.params.userId }, (err: Error) => {
            if (err) {
                res.status(404).send(err);
            }
            res.status(200).json({ message: 'Successfully deleted user!'});
        });
    }
}