import { Document } from "mongoose";

export default interface Author extends Document {
	id?: string;
	name: string;
	age: number;
}
