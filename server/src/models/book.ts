import { model, Schema } from "mongoose";
import Book from '../interface/book';

const bookSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	genre: {
		type: String,
		required: true
	},
	available: {
		type: Boolean,
		required: true
	},
	authorId: {
		type: String,
		required: true
	}
});

export default model<Book>('Book', bookSchema);
