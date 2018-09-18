// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) =>{
  if(err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');
  // here we access the collection
  // db.collection('Todos').find({
  //   _id: new ObjectID('5ba06944ee35f7276470e4f4')
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined ,2));
  // },(err)=>{
  //   console.log('Unable to fatch todos',err);
  // });

  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos Count: ${count}`);
  //
  // },(err)=>{
  //   console.log('Unable to fatch todos',err);
  // });

db.collection('Users').find({name:'Dixit'}).toArray().then((docs)=>{
    console.log('Names are');
    console.log(JSON.stringify(docs, undefined , 2));
  },(err)=>{
    console.log('Unable to fatch Users',err);
  });

  //db.close();
});
