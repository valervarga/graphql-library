import React, { FC } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import Book from '../interfaces/book';
import BookItem from './BookItem';

const getBooksQuery = gql`
	{
		books {
			id,
			name,
			genre,
			available
		}
	}
`;

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
