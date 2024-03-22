const MongoClient = require('mongodb').MongoClient;

// Replace the following with the connection string for your MongoDB server
const uri = 'mongodb://localhost:27017';

// Replace the following with the name of your database
const dbName = 'mydb';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    if (err) throw err;

    const db = client.db(dbName);

    // Replace the following with your JSON document
    const doc = {
        "name": "Kệ tủ đựng rượu",
        "price": 15000000,
        "views": 0,
        "createdDate": new Date(),
        "origin": "Việt Nam"
    };

    const collection = db.collection('products');

    collection.insertOne(doc, (err, result) => {
        if (err) throw err;

        console.log("Document inserted with _id: ", result.insertedId);

        client.close();
    });
});