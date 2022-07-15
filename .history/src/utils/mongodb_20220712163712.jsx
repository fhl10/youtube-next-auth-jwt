import { MongoClient } from "mongodb";
URI
const uri=   process.env.MONGODB_URI ;
const dbName=process.env.MONGODB_DB;

const cachedDb;

const cachedClient;

if(!uri){
  throw new Error(
    'defina a url em .env.local'
  );
}

if(!dbName){
  throw new Error(
    'defina o nome do banco em .env.local'
    );
}

export async function conectDataBase(){
  if(cachedClient && cachedDb) {
    return {client: cachedClient, db: cachedDb};
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParcer:true,
    useUnifiedTopology: true,
  });
  const db = await client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return {client, db}
}