import mongoose from 'mongoose';

export default class Mongo {
  constructor() {
    mongoose.connect(process.env.DB_URI || "");
  }
}
