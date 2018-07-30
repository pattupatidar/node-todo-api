var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text:req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({
      todos
    });
  }, (e) => {
    res.status(400).send(e);
  });
});
app.listen(3000, ()=> {
  console.log('Started on port 3000');
});









































/*var user = new User({
  Email: 'education.prateek@gmail.com'
});
user.save().then((doc) => {
  console.log('User saved : ',doc);
},(err) => {
  console.log('Unable to save : ', err);
});
//
// var newTodo = new Todo({
//   text: "Cook dinner"
// });

//saving to the mongodb database
// newTodo.save().then((doc) => {
//   console.log(doc)
// },(err) => {
//   console.log("Unable to save todo");
//  });
  var otherTodo = new Todo({
    text: " Edit the Properties ",
    completed: true,
    completedAt: 123
  });
  otherTodo.save().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  },(err) => {
    console.log("Unable to save the data : ",err);
  });
*/
