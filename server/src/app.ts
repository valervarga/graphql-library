import express, { Application } from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import schema from './schema/schema';

const app: Application = express();
const PORT = process.env.PORT || 4000;

// Connect to mlab database
mongoose.connect('mongodb://test:test123@ds263127.mlab.com:63127/gql-library', { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log('Connected to database'));

app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true
}));

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
