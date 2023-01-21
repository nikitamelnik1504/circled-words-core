import {ApolloServer} from "@apollo/server";
import resolvers from './resolvers';
import typeDefs from './type-defs';
import {startStandaloneServer} from "@apollo/server/standalone";

(async () => {
  const server = new ApolloServer({typeDefs, resolvers});
  const {url} = await startStandaloneServer(server, {
    listen: {port: 4000},
  });
  console.log(`🚀  Server ready at: ${url}`);
})();

// HMR
if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => console.log('Module disposed. '));
}