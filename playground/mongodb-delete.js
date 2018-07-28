//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    console.log('Unable to connect with Monodb server');
    return;
  }
  console.log('Connected to Monodb server');
  const db = client.db('TodoApp');

  // deleteMany
  // db.collection('Todos').deleteMany({
  //   text: 'Eat Lunch'
  // }).then((result) => {
  //   console.log(result);
  // });
  //

  //deleteOne

    // db.collection('Todos').deleteOne({
    //   text: 'Eat Lunch'
    // }).then((result) => {
    //   console.log(result);
    // })

    //findOneAndDelete

    // db.collection('Todos').findOneAndDelete({
    //   completed: false
    // }).then((result) => {
    //   console.log(result);
    // })

    //Assignment

    // db.collection('Users').deleteMany({
    //   Name: 'Pattu Patidar'
    // }).then((results) => {
    //   console.log(results);
    // });

      // db.collection('Users').findOneAndDelete({
      //   _id: new ObjectID("5b5c87a30f0cc3418fcd9a4a")
      // }).then((results) => {
      //   console.log(results);
      // });

      db.collection('Users').deleteOne(() => {
        age: 22
      }).then((results) => {
        console.log(results);
      });
  client.close();
 });
