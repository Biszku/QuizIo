import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://Daniel:${process.env.NEXT_PUBLIC_DB_PASSWD}@cluster0.ur6diwh.mongodb.net/?retryWrites=true&w=majority`
  );

  return client;
}
