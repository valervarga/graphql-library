import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLBoolean,
	GraphQLSchema,
	GraphQLID,
	GraphQLInt
} from 'graphql';

const books = [
	{ id: '1', name: 'BookName 1', genre: 'Fantasy', available: false },
	{ id: '2', name: 'BookName 2', genre: 'Fantasy', available: true },
	{ id: '3', name: 'BookName 3', genre: 'Sci-Fi', available: true }
];

const authors = [
	{ id: '1', name: 'AuthorName 1', age: 44 },
	{ id: '2', name: 'AuthorName 2', age: 23 },
	{ id: '3', name: 'AuthorName 3', age: 72 }
];

const BookType = new GraphQLObjectType({
	name: 'Book',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		genre: { type: GraphQLString },
		available: { type: GraphQLBoolean }
	})
});

const AuthorType = new GraphQLObjectType({
	name: 'Author',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		age: { type: GraphQLInt }
	})
});

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		book: {
			type: BookType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				// code to get data from db / other source
				return books.find(book => book.id === args.id);
			}
		},

		author: {
			type: AuthorType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				// code to get data from db / other source
				return authors.find(author => author.id === args.id);
			}
		}
	}
});

export default new GraphQLSchema({ query: RootQuery });
