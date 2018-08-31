import { UserController } from 'controllers/user';
import { Application } from 'express';

export class UserRoutes {

	public userController: UserController = new UserController();

	public routes(app: Application): void {
		app.route('/users/counter')
			.get(this.userController.getUniqueId);

		app.route('/users')
			.post(this.userController.addUser)
			.get(this.userController.getUsers);

		app.route('/users/:userId')
			.get(this.userController.getUserWithId)
			.put(this.userController.updateUser)
			.delete(this.userController.deleteUser);
	}
}
