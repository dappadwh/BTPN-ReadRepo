var MongoClient = require('mongodb').MongoClient;

async function Collection(collection){
    const url = "mongodb+srv://rafidaffa:P4ssword@dappadwh.zydll.mongodb.net/test"
    try {
          const db = await MongoClient.connect(url, {useUnifiedTopology: true});
          if (db) {
              return db.db('RafiDaffaM').collection(collection)
          }
      } catch (error) {
          console.log(error)
      }
  }

module.exports = Collection