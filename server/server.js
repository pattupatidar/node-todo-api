var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

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

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  //validate the id
    if(!ObjectID.isValid(id)) {
      console.log('heyyeyey0');
      return res.status(400).send();
    }
    Todo.findById(id).then((todo) => {
      if (!todo) {
        console.log('heyyeyey1');
        return res.status(400).send();
      }
      res.send({
        todo
      });
    }).catch((e) => {
      console.log('heyyeyey2');
      res.status(400).send();
    })
});
app.listen(3000, ()=> {
    var id = console.log('Started on port 3000');
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
