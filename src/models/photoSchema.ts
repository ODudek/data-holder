import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PhotoSchema = new Schema({
	photoId: String,
	photoUrl: String,
	thumbUrl: String,
	title: String,
});
