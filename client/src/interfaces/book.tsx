export default interface Book {
	id?: string;
	name: string;
	genre: string;
	available: boolean;
	authorId?: string;
	getId?: (bookId: string) => void;
}
