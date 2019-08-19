import React from 'react';
import Book from '../interfaces/book';

const BookItem = ({id, name, genre, available, getId}: Book) => {

	return (
		<div>
			<h3 onClick={() => getId && getId(id || '')}>{ name }</h3>
			<p>{ genre }</p>
			<span>Available: { available.toString() }</span>
		</div>
	);
};

export default BookItem;
