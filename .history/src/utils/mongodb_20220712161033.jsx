import { MongoClient } from "mongodb";

const uri= "";
const dbName="";

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