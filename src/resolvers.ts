import {Resolvers} from "./generated/graphql";
import CircledResolver from "./Resolvers/CircledResolver";

const resolvers: Resolvers = {
    Query: {
        circled: (parent, args) => ((new CircledResolver(<never>parent, args)).load())
    }
}

export default resolvers;
