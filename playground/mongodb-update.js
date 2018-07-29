//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    console.log('Unable to connect with Monodb server');
    return;
  }
  console.log('Connected to Monodb server');
  const db = client.db('TodoApp');

  /*db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID("5b5cdd7139869bb06dd1b5fc"),
  }, {
    $set: {
      completed: true,
    }
  }, {
    returnOriginal: false
  }).then((results) => {
    console.log(results);
  });
*/
  // Assignment

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b5dc7400767ad5c9bed93e1')
  }, {
    $set: {
      Name: 'Pooja Patidar',
    },
    // Increment by 1
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((results) => {
    console.log(results);
  })
  client.close();
 });
