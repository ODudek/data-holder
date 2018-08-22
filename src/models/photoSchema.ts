import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PhotoSchema = new Schema({
	id: String,
	photoUrl: String,
	thumbUrl: String,
	title: String,
});
