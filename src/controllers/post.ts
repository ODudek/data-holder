import { PostSchema } from 'models/postSchema';
import { model } from 'mongoose';
import { Request, Response } from 'express';
import { TDoc, IPost } from 'types';
import { perPage, getRangeOfArray } from 'helpers/utils';
import { isEmpty } from 'lodash';

const Post = model('Post', PostSchema);

export class PostController {
	public deletePost(req: Request, res: Response): void {
		res.send('delete')
	}

	public getUniqueId(req: Request, res: Response): void {
        Post.find((err: Error, posts: IPost[]) => res.status(200).send({ postId: Number(posts.length)   + 1 }));
    }

	public updatePost(req: Request, res: Response): void {
		res.send('update')
	}

	public getPostWithId(req: Request, res: Response): void {
		Post.findOne({ postId: req.params.postId }, (err: Error, post: IPost) => {
			if (isEmpty(post)) {
				res.status(404).send({ message: 'Post doesn\'t exists' });
			} else {
				if (err) {
					res.status(404).send(err);
				}
				res.status(200).json(post);
			}
		});
	}

	public getPosts(req: Request, res: Response): void {
		const page = req.query.page;
		if (!isEmpty(page)) {
			Post.find((err: Error, posts: IPost[]) => {
				if (err) {
					res.status(404).send(err);
				}
				const usersOnPage = getRangeOfArray(posts, page);
				res.status(200).send({
					data: usersOnPage,
					page,
					perPage,
				});
			});
		} else {
			Post.find((err: Error, posts: IPost[]) => {
				if (err) {
					res.status(404).send(err);
				}
				res.status(200).send(posts);
			});
		}
	}

	public addPost(req: Request, res: Response): void {
		const newPost = new Post(req.body);
		newPost.save((err: Error, post: TDoc) => {
			if (err) {
				res.status(404).send(err);
			}
			res.status(200).json(post);
		});
	}
}
