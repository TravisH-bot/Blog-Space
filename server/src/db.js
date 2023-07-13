import { MongoClient } from "mongodb";

let db;

const connectToDb = async (cb) => {
  const client = new MongoClient(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.kvnr1iv.mongodb.net/?retryWrites=true&w=majority`
  );
  await client.connect();
  db = client.db("react-blog-db");
  cb();
};

export { db, connectToDb };
