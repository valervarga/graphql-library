import { model, Schema } from "mongoose";
import Author from '../interface/author';

const authorSchema: Schema<Author> = new Schema({
	name: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true
	}
});

export default model<Author>('Author', authorSchema);
