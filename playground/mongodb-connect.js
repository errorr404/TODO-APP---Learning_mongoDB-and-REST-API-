// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) =>{
  if(err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');
  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   compleated: false
  // },(err,result)=>{
  //   if(err) return console.log('Unable to insert todo',err);
  //
  // });
  // inset new doc into users (name,age,location)
  // db.collection('Users').insertOne({
  //   name:'Dixit',
  //   age:'21',
  //   location:'Bhopal'
  // },(err,result) =>{
  //   if(err) return console.log('Unable to insert todo',err);
  //   //console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // });
  db.close();
});
