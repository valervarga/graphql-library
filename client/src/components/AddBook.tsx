import React, { useState, SyntheticEvent } from 'react'
import { useQuery } from '@apollo/react-hooks';
import Author from '../interfaces/author';
import { getAuthorsQuery } from '../queries/queries';

const AddBook = () => {
	const { loading, error, data } = useQuery(getAuthorsQuery);
	const [name, setName] = useState('');
	const [genre, setGenre] = useState('');
	const [available, setAvailable] = useState(false);
	const [authorId, setAuthorId] = useState('');

	if (loading) return <p>Authors are being fetched...</p>;
	if (error) return <p>Something went wrong during the fetch: {error.message}</p>;

	const { authors } = data;
	const authorOptionElements = authors.map((author: Author) => <option key={author.id} value={author.id}>{author.name}</option>);

	const handleSubmit = (event: SyntheticEvent) => {
		event.preventDefault();

		console.log(name, genre, available, authorId);
	}

	return (
		<form id="add-book" onSubmit={handleSubmit}>
			<div className="field">
				<label htmlFor="book-name">Book name:</label>
				<input type="text" name="book-name" id="book-name" value={name} onChange={ (e) => setName(e.target.value) }/>
			</div>
			<div className="field">
				<label htmlFor="book-genre">Genre:</label>
				<input type="text" name="book-genre" id="book-genre" value={genre} onChange={ (e) => setGenre(e.target.value) }/>
			</div>
			<div className="field">
				<label htmlFor="book-available">Is book available?</label>
				<input type="checkbox" name="book-available" id="book-available" checked={available} onChange={ (e) => setAvailable(e.target.checked) }/>
			</div>
			<div className="field">
				<label htmlFor="book-author">Author:</label>
				<select name="book-author" id="book-author" value={authorId || "Select author"} onChange={ (e) => setAuthorId(e.target.value) }>
					<option disabled value="Select author">Select author</option>
					{ authorOptionElements }
				</select>
			</div>

			<button>+</button>
		</form>
	)
}

export default AddBook;
