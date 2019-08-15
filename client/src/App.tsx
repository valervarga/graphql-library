import React, { FC } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

// components
import BookList from './components/BookList';
import AddBook from './components/AddBook';

// apollo client setup
const client = new ApolloClient({
	uri: '/graphql'
});

const App: FC = () => (
	<ApolloProvider client={client}>
		<h1>GraphQL Library</h1>
		<BookList />
		<AddBook />
	</ApolloProvider>
);

export default App;
