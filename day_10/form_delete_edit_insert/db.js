const mongodb=require('mongodb')
const mongoClient=mongodb.MongoClient;

let database;

async function getDataBase(){

    const client =await mongoClient.connect('mongodb://127.0.0.1:27017')
    database=await client.db('bookdemo1')
    if(!database){
        console.log("not Connected");
    }
    return database
}
module.exports={getDataBase};

