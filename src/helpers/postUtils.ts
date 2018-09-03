import { PostSchema } from 'models/postSchema';
import { model } from 'mongoose';
import { IPost } from 'types';
import { getIds } from 'helpers/utils';
import { sample } from 'lodash';
import { Response } from 'express';

const Post = model('Post', PostSchema);

export const postRandomId = (res: Response): void => {
	Post.find((error: Error, posts: IPost[]) => {
		if (error) {
			res.status(404).json({ message: 'Cannot find any post!' });
		}
		const IdsArray = getIds(posts, 'postId');
		res.status(200).json({ postId: sample(IdsArray) });
	});
};
