const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://rahulpandharkar:M5fR8OW2EtMrny8y@cluster0.jyeuouw.mongodb.net/';
const dbName = 'myDatabase';

async function main() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db(dbName);
    const collection = db.collection('documents');
    
    const insertResult = await collection.insertOne({ name: 'John Doe', age: 30 });
    console.log('Inserted document:', insertResult.insertedId);
    
    const findResult = await collection.findOne({ _id: insertResult.insertedId });
    console.log('Found document:', findResult);
    
    await collection.updateOne({ _id: insertResult.insertedId }, { $set: { age: 31 } });
    console.log('Document updated');
    
    const deleteResult = await collection.deleteOne({ _id: insertResult.insertedId });
    console.log('Deleted document:', deleteResult.deletedCount);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}

main();
