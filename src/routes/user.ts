import { UserController } from '../controllers/user';
import express from 'express';

export class UserRoutes {
    public userController: UserController = new UserController();
    public routes(app: express.Application): void {

        app.route('/users')
            // .post(this.userController.addNewUser)
            .get(this.userController.getUsers);

        app.route('/users/:userId')
            .get(this.userController.getUserWithId)
            .put(this.userController.updateUser)
            .delete(this.userController.deleteUser);
    }
};
