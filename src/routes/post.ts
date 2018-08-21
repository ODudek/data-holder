import { Application } from 'express';
import { PostController } from 'controllers/post';

export class PostRoutes {
    public userController: PostController = new PostController();
    public routes(app: Application): void {

        app.route('/users')
            .post(this.userController.addUser)
            .get(this.userController.getUsers)

        app.route('/users/:userId')
            .get(this.userController.getUserWithId)
            .put(this.userController.updateUser)
            .delete(this.userController.deleteUser);
    }
}