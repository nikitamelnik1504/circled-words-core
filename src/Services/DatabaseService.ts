import {Schema, model, connect, Types} from 'mongoose';
import * as Mongoose from "mongoose";
import {environment} from "../environment";

interface INFT {
  tokenAddress: string;
  properties: Array<{ type: Types.ObjectId, value: Types.ObjectId }>
}

const nftSchema = new Schema<INFT>({
  tokenAddress: {type: String, required: true},
  properties: [
    {
      type: {type: Types.ObjectId, required: true},
      value: {type: Types.ObjectId, required: true}
    },
  ]
});

export default class DatabaseService {
  private connection: Promise<typeof Mongoose>;
  private nftModel: Mongoose.Model<INFT>;

  constructor() {
    this.connection = connect(environment.database.url);
    this.nftModel = model<INFT>('NFT', nftSchema, 'NFT');
  }
};
