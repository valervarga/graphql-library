import { gql } from 'apollo-boost';

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

const getBookQuery = gql`
	query($id: ID) {
		book(id: $id) {
			id,
			name,
			genre,
			available,
			author {
				id,
				name,
				age,
				books {
					id,
					name
				}
			}

		}
	}
`;

const getAuthorsQuery = gql`
	{
		authors {
			id,
			name,
			age
		}
	}
`;

const addBookMutation = gql`
	mutation($name: String!, $genre: String!, $available: Boolean!, $authorId: ID!) {
		addBook(name: $name, genre: $genre, available: $available, authorId: $authorId) {
			id,
			name,
			available
		}
	}
`;

export {
	getBooksQuery,
	getBookQuery,
	getAuthorsQuery,
	addBookMutation
};
