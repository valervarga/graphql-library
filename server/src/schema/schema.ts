import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLBoolean,
	GraphQLSchema,
	GraphQLID,
	GraphQLInt,
	GraphQLList,
	GraphQLNonNull
} from 'graphql';
import BookModel from '../models/book';
import AuthorModel from '../models/author';

const BookType: any = new GraphQLObjectType({
	name: 'Book',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		genre: { type: GraphQLString },
		available: { type: GraphQLBoolean },
		author: {
			type: AuthorType,
			resolve(parent, args) {
				return AuthorModel.findById(parent.authorId);
			}
		}
	})
});

const AuthorType: any = new GraphQLObjectType({
	name: 'Author',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		age: { type: GraphQLInt },
		books: {
			type: new GraphQLList(BookType),
			resolve(parent, args) {
				return BookModel.find({ authorId: parent.id });
			}
		}
	})
});

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		book: {
			type: BookType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return BookModel.findById(args.id);
			}
		},

		books: {
			type: new GraphQLList(BookType),
			resolve(parent, args) {
				return BookModel.find({});
			}
		},

		author: {
			type: AuthorType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				// code to get data from db / other source
				// return authors.find(author => author.id === args.id);
				return AuthorModel.findById(args.id);
			}
		},

		authors: {
			type: new GraphQLList(AuthorType),
			resolve(parent, args) {
				return AuthorModel.find({});
			}
		}
	}
});

const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addAuthor: {
			type: AuthorType,
			args: {
				name: { type: new GraphQLNonNull(GraphQLString) },
				age: { type: new GraphQLNonNull(GraphQLInt) }
			},
			resolve(parent, args) {
				const { name, age } = args;
				const author = new AuthorModel({ name, age });
				return author.save();
			}
		},

		addBook: {
			type: BookType,
			args: {
				name: { type: new GraphQLNonNull(GraphQLString) },
				genre: { type: new GraphQLNonNull(GraphQLString) },
				available: { type: new GraphQLNonNull(GraphQLBoolean) },
				authorId: { type: new GraphQLNonNull(GraphQLID) }
			},
			resolve(parent, args) {
				const { name, genre, available, authorId } = args;
				const book = new BookModel({ name, genre, available, authorId });
				return book.save();
			}
		}
	}
});

export default new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation
});
