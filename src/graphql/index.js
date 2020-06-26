import { makeExecutableSchema } from 'apollo-server';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});