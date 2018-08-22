import { PostController } from 'controllers/post';
import { Application } from 'express';

export class PostRoutes {

	public postController: PostController = new PostController();

	public routes(app: Application): void {

		app.route('/posts')
			.post(this.postController.addPost)
			.get(this.postController.getPosts);

		app.route('/posts/:postId')
			.get(this.postController.getPostWithId)
			.put(this.postController.updatePost)
			.delete(this.postController.deletePost);
	}
}
