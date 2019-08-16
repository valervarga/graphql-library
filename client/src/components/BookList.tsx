import React, { FC } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Book from '../interfaces/book';
import BookItem from './BookItem';
import { getBooksQuery } from '../queries/queries';

const BookList: FC = () => {
	const { loading, error, data } = useQuery(getBooksQuery);

	if (loading) return <p>Books are being fetched...</p>;
	if (error) return <p>Something went wrong during the fetch: {error}</p>;

	const { books } = data;
	const fetchedBooks = books.map((book: Book) => <BookItem key={book.id} {...book} />);

	return (
		<div>
			{ fetchedBooks }
		</div>
	)
}

export default BookList;
