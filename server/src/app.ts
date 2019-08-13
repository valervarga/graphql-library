import express, { Application } from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema/schema';

const app: Application = express();
const PORT = process.env.PORT || 4000;

app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true
}));

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
