import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { getBookQuery } from '../queries/queries';

const BookDetails = () => {
	const { loading, error, data } = useQuery(getBookQuery);

	if (loading) return <p>Book is being fetched...</p>;
	if (error) return <p>Something went wrong during the fetch: {error}</p>;

	const { name, genre, available, author } = data;
	return (
		<div className="book-details">
			<p>Output book details here: { name }</p>
		</div>
	)
}

export default BookDetails;
