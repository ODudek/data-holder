import { Request, Response } from 'express';
import { isValidUser } from 'helpers/userUtils';
import { getIds, getRangeOfArray, perPage } from 'helpers/utils';
import { isEmpty, sample } from 'lodash';
import { UserSchema } from 'models/userSchema';
import { model } from 'mongoose';
import { IUser, TDoc } from 'types';

const User = model('User', UserSchema);

export class UserController {

    public getUniqueId(req: Request, res: Response): void {
        User.find((err: Error, users: IUser[]) => {
            if (err) {
                res.status(404).json({ message: 'Cannot get users' , err });
            }
            res.status(200).json({ userId: Number(users.length) + 1 });
        });
    }

    public getRandomUserId(req: Request, res: Response): void {
        User.find((err: Error, users: IUser[]) => {
            if (err) {
                res.status(404).json({ message: 'Cannot find any user!', err });
            }
            const IdsArray = getIds(users, 'userId');
            res.status(200).json({ userId: sample(IdsArray) });
        });
    }

    public addUser(req: Request, res: Response): void {
        User.find({ username: req.body.username }, (err: Error, uniqueUser: IUser) => {
            if (err) {
                res.status(404).json({ message: 'Cannot get user!', err });
            } else {
                if (isValidUser(req, uniqueUser)) {
                    const newUser = new User(req.body);
                    newUser.save((e: Error, user: TDoc) => {
                        if (e) {
                            res.status(404).json({ message: 'Cannot save user!', err });
                        }
                        res.status(200).json(user);
                    });
                } else {
                    res.status(404).json({ message: 'Check all required fileds!' });
                }
            }
        });
    }

    public getUsers(req: Request, res: Response, next: any): void {
        const page = req.query.page;
        if (!isEmpty(page)) {
                User.find((err: Error, users: IUser[]) => {
                    if (err) {
                        res.status(404).json({ message: 'Cannot find users!', err });
                    }
                    const usersOnPage = getRangeOfArray(users, page);
                    res.setHeader('X-Content-Length', Buffer.byteLength(JSON.stringify(users), 'utf-8'));
                    res.status(200).json({
                        data: usersOnPage,
                        page,
                        perPage,
                    });
                });
        } else {
            User.find({}, (err: Error, users: IUser[]) => {
                if (err) {
                    res.status(404).json({ message: 'Cannot find users!', err });
                }
                res.setHeader('X-Content-Length', Buffer.byteLength(JSON.stringify(users), 'utf-8'));
                res.status(200).json(users);
            });
        }
    }

    public getUserWithId(req: Request, res: Response): void {
        User.findOne({ userId: req.params.userId }, (err: Error, user: IUser) => {
            if (err) {
                res.status(404).json({ message: 'Cannot find user!' , err });
            }
            if (isEmpty(user)) {
                res.status(404).json({ message: 'User doesn\'t exists' });
            } else {
                res.status(200).json(user);
            }
        });
    }

    public updateUser(req: Request, res: Response): void {
        User.findOneAndUpdate({ userId: req.params.userId }, req.body, { new: true }, (err: Error, user: TDoc) => {
            if (err) {
                res.status(404).json({message: 'Cannot find and update user!', err });
            }
            res.status(200).json(user);
        });
    }

    public deleteUser(req: Request, res: Response): void {
        User.findOneAndRemove({ userId: req.params.userId }, (err: Error, user: TDoc) => {
            if (err) {
                res.status(404).json({ message: 'Cannot find and delete user!', err });
            }
            res.status(200).json({ message: 'Successfully deleted user!', data: user });
        });
    }
}
