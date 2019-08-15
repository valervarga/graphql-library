import React from 'react'
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const getAuthorsQuery = gql`
	{
		authors {
			id,
			name,
			age
		}
	}
`;

const AddBook = () => {
	const { loading, error, data } = useQuery(getAuthorsQuery);

	if (loading) return <p>Authors are being fetched...</p>;
	if (error) return <p>Something went wrong during the fetch: {error.message}</p>;

	const { authors } = data;
	const authorOptionElements = authors.map((author: any) => <option key={author.id} value={author.name}>{author.name}</option>);

	return (
		<form id="add-book">
			<div className="field">
				<label htmlFor="book-name">Book name:</label>
				<input type="text" name="book-name" id="book-name"/>
			</div>
			<div className="field">
				<label htmlFor="book-genre">Genre:</label>
				<input type="text" name="book-genre" id="book-genre"/>
			</div>
			<div className="field">
				<label htmlFor="book-available">Is book available?</label>
				<input type="checkbox" name="book-available" id="book-available"/>
			</div>
			<div className="field">
				<label htmlFor="book-author">Author:</label>
				<select name="book-author" id="book-author" defaultValue="Select author">
					<option disabled value="Select author">Select author</option>
					{ authorOptionElements }
				</select>
			</div>

			<button>+</button>
		</form>
	)
}

export default AddBook;
