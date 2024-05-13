import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient(process.env.DBSTRING);
  return client;
}
