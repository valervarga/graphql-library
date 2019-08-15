import { Document } from 'mongoose';

export default interface Book extends Document {
	name: {
		type: string,
		require: true
	};
	genre: {
		type: string,
		require: true
	};
	available: {
		type: boolean,
		require: true
	};
	authorId: {
		type: string,
		require: true
	};
}
