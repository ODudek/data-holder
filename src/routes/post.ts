import { PostController } from 'controllers/post';
import { Application } from 'express';

export class PostRoutes {

	public userController: PostController = new PostController();

	public routes(app: Application): void {

		app.route('/posts')
			.post(this.userController.addPost)
			.get(this.userController.getPosts);

		app.route('/posts/:postId')
			.get(this.userController.getPostWithId)
			.put(this.userController.updatePost)
			.delete(this.userController.deletePost);
	}
}
