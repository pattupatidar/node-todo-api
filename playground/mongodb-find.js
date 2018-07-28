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
  /*
  to fetch data of complete collection
  db.collection('Todos').find().toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('unable to fetch todos', err);
  });*/
  // to fetch data of particular coloum
  /*db.collection('Todos').find({
    //completed: false,
    _id: new ObjectID('5b5c864381592d4153190788')
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('unable to fetch todos', err);
  });*/
  // count number of records in the mongodb for a particular collection:
/*  db.collection('Todos').find().count().then((count) => {
    console.log('Todos');
    console.log(`Number of recors : ${count}`);
    }, (err) => {
    console.log('unable to fetch todos', err);
  });*/
  // assignment
  db.collection('Users').find({
    Name: "Pattu Patidar"
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
    console.log('unable to fetch todos', err);
  });
  client.close();
 });
