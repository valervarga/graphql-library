import { Document } from 'mongoose';

export default interface Book extends Document {
	id?: string,
	name: string;
	genre: string;
	available: boolean;
	authorId?: string;
}
