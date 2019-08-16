import React from 'react';
import Book from '../interfaces/book';

const BookItem = ({id, name, genre, available}: Book) => {

	return (
		<div>
			<h3>{ name }</h3>
			<p>{ genre }</p>
			<span>Available: { available.toString() }</span>
		</div>
	);
};

export default BookItem;
