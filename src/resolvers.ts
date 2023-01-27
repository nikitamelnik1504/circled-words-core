import {Circled, QueryResolvers, Resolvers} from "./generated/graphql";

export default <Resolvers>{
    Query: <QueryResolvers>{
        circled: (parent, args): Array<Circled> => {
            return [
                {tokenAddress: 'test'}
            ];
        }
    }
}
