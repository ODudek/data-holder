import { Request, Response } from 'express';
import { isEmpty } from 'lodash';
import { UserSchema } from 'models/userSchema';
import { model } from 'mongoose';
import { IUser, TDoc } from 'types';
import { usersWithIds, perPage, getRangeOfArray } from 'utils';

const User = model('User', UserSchema);

export class UserController {
	public getRandomUserId(req: Request, res: Response): void {
        usersWithIds((uniqueIds) => {
            const id = uniqueIds[Math.floor(Math.random() * uniqueIds.length)];
            res.status(200).send({ userId: id });
        });
    }

    public getUniqueId(req: Request, res: Response): void {
        User.find((err: Error, users: IUser[]) => res.status(200).send({ userId: Number(users.length)   + 1 }));
    }

    public addUser(req: Request, res: Response): void {
        User.find({ username: req.body.username }, (e: Error, uniqueUser: IUser) => {
            if (!isEmpty(req.body.email) && !isEmpty(req.body.username)) {
                if (isEmpty(uniqueUser)) {
                    const newUser = new User(req.body);
                    newUser.save((err: Error, user: TDoc) => {
                        if (err) {
                            res.status(404).send({user: req.body, err});
                        }
                        res.status(200).json(user);
                    });
                } else {
                    res.status(404).send({ message: 'Email taken!'});
                }
            } else {
                res.status(404).send({ message: 'email and username are required' });
            }
        });
    }

    public getUsers(req: Request, res: Response): void {
        const page = req.query.page;
        if (!isEmpty(page)) {
                User.find((err: Error, users: IUser[]) => {
                    if (err) {
                        res.status(404).send(err);
                    }
                    const usersOnPage = getRangeOfArray(users, page);
                    res.status(200).send({
                        data: usersOnPage,
                        page,
                        perPage,
                    });
                });
        } else {
            User.find({}, (err: Error, users: IUser[]) => {
                if (err) {
                    res.status(404).send(err);
                }
                res.set('Content-Type', 'application/json; charset=UTF-8');
                res.status(200).json(users);
            });
        }
    }

    public getUserWithId(req: Request, res: Response): void {
        User.findOne({ userId: req.params.userId }, (err: Error, user: IUser) => {
            if (isEmpty(user)) {
                res.status(200).send({ message: 'User doesn\'t exists' });
            } else {
                if (err) {
                    res.status(404).send(err);
                }
                res.status(200).json(user);
            }
        });
    }

    public updateUser(req: Request, res: Response): void {
        User.findOneAndUpdate({ userId: req.params.userId }, req.body, { new: true }, (err: Error, user: TDoc) => {
            if (err) {
                res.status(404).send(err);
            }
            res.status(200).json(user);
        });
    }

    public deleteUser(req: Request, res: Response): void {
        User.deleteOne({ userId: req.params.userId }, (err: Error) => {
            if (err) {
                res.status(404).send(err);
            }
            res.status(200).json({ message: 'Successfully deleted user!'});
        });
    }
}
