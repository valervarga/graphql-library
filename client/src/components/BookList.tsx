import React, { FC, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getBooksQuery } from '../queries/queries';
import Book from '../interfaces/book';
import BookItem from './BookItem';
import BookDetails from './BookDetails';

const BookList: FC = () => {
	const [ bookId, setBookId ] = useState('');
	const { loading, error, data } = useQuery(getBooksQuery);

	if (loading) return <p>Books are being fetched...</p>;
	if (error) return <p>Something went wrong during the fetch: {error}</p>;

	const { books } = data;
	const fetchedBooks = books.map((book: Book) => <BookItem key={book.id} {...book} getId={(id: string) => setBookId(id)} />);
	const noSelectedBook = (
		<div>
			<br/><br/><hr/>
			<p>Output book details go here.</p>
			<hr/><br/><br/>
		</div>
	);

	return (
		<div>
			{ fetchedBooks }
			{ bookId ? <BookDetails bookId={bookId}/> : noSelectedBook }
		</div>
	);
};

export default BookList;
