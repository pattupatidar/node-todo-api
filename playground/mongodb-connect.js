//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
//var obj = new ObjectID();
//console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    console.log('Unable to connect with monodb server');
    return;
  }
  console.log('Connected to monodb server');
  const db = client.db('TodoApp');
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert Todos');
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })
  db.collection('Users').insertOne({
    Name: 'Kapil Patidar',
    Age: 22,
    Location: 'Dehradun'
  }, (err, results) => {
    if(err) {
      return console.log('Unable to insert data into users collection');
    }
    console.log(JSON.stringify(results.ops, undefined, 2));
  });
client.close();
 });
