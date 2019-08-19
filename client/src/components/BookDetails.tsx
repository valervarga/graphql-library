import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getBookQuery } from '../queries/queries';

const BookDetails = ({ bookId }: any) => {
	const { loading, error, data } = useQuery(
		getBookQuery,
		{
			variables: { id: bookId },
			notifyOnNetworkStatusChange: true
		}
	);

	if (loading) return <p>Book is being fetched...</p>;
	if (error) return <p>Something went wrong during the fetch: {error.message}</p>;
	if (!bookId || !data) return (
		<div>
			<br/><br/><hr/>
			<p>Output book details go here.</p>
			<hr/><br/><br/>
		</div>
	);

	const { name, genre, available, author } = data.book;
	return (
		<div className="book-details">
			<br/><br/><hr/>
			<p>Name: <strong>{ name }</strong></p>
			<p>Genre: { genre }</p>
			<p>Available: { available }</p>
			<p>Author: { author.name }</p>
			<p>All books written by this author:</p>
			<ul>
				{ author.books.map((book: any) => <li key={ book.id }>{ book.name }</li>) }
			</ul>
			<hr/><br/><br/>
		</div>
	);
};

export default BookDetails;
