// import { Request, Response } from 'express';
// import { isEmpty } from 'lodash';
// import { UserSchema } from 'models/userSchema';
// import { model } from 'mongoose';
import { Request, Response } from 'express';

// const User = model('User', UserSchema);

export class PostController {
	public deletePost(req: Request, res: Response): void {
		res.send('delete')
	}

	public updatePost(req: Request, res: Response): void {
		res.send('update')
	}

	public getPostWithId(req: Request, res: Response): void {
		res.send('post id')
	}

	public getPosts(req: Request, res: Response): void {
		res.send('posts')
	}

	public addPost(req: Request, res: Response): void {
		res.send('addPost')
	}
}
