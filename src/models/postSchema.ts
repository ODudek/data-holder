import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PostSchema = new Schema({
	content: String,
	postId: String,
	title: String,
	userId: String,
});
