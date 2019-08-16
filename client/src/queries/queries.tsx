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

const getAuthorsQuery = gql`
	{
		authors {
			id,
			name,
			age
		}
	}
`;

export {
	getBooksQuery,
	getAuthorsQuery
};
