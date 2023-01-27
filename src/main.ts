import {ApolloServer, BaseContext} from "@apollo/server";
import resolvers from './resolvers';
import {startStandaloneServer} from "@apollo/server/standalone";
import {environment} from "./environment";
import {
  ApolloServerPluginLandingPageLocalDefault,
} from "@apollo/server/plugin/landingPage/default";
import typeDefs from './schema.graphql'
import {ApolloServerPluginLandingPageDisabled} from "@apollo/server/plugin/disabled";

(async () => {
  const server = new ApolloServer<BaseContext>({
    typeDefs, resolvers, introspection: environment.apollo.introspection, plugins: [
      environment.env === 'production' ? ApolloServerPluginLandingPageDisabled
      () : ApolloServerPluginLandingPageLocalDefault()
    ]
  });
  const {url} = await startStandaloneServer(server, {
    listen: {port: environment.apollo.port}
  });
  console.log(`🚀  Server ready at: ${url}`);
})();

// HMR
if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => console.log('Module disposed. '));
}