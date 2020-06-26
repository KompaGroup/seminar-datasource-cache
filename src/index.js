import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import { RedisCache } from 'apollo-server-cache-redis';
import createDataSource from './datasources';
import { schema } from './graphql';
//import createSeedData from './seed';

(async () => {
  mongoose.set('debug', true);
  const db = await mongoose.connect("mongodb://localhost:27017/demo", { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if (err) console.error(err);
    console.log("db connecting,");
  });

  //await createSeedData(createDataSource(db));
  const server = new ApolloServer({
    schema,
    tracing: true,
    cache: new RedisCache({
      host: '127.0.0.1',
      port: '6379'
    }),
    dataSources: () => ({
      ...createDataSource(db)
    }),
  });
  server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
})();