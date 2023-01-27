import {QueryCircledArgs} from "../generated/graphql";

export default class CircledResolver {
  public args: QueryCircledArgs;

  constructor(parent: never, args: QueryCircledArgs) {
    this.args = args;
  }

  load() {
    return [
      {tokenAddress: 'test'}
    ];
  }
}
