
import { MongoClient } from "mongodb";

if(!process.env.CONNECTION_STRING){
    throw new Error("Invailid connection string")
}

const url = process.env.CONNECTION_STRING;
const options = {};



const client = new MongoClient(url,options);
const clientpromise = client.connect();

async function getDatabase() {
const client = await clientpromise;
return client.db("Image-caption")

};

export async function getCollection(collectionname){
   const db = await getDatabase();
    return db.collection(collectionname);
    

}

export default getDatabase;