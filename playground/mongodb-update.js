// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) =>{
  if(err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID("5ba183c8ca7105233bc95c40"),
  }, {
    $set: {
      complete: false
    }
  },{
    returnOriginal: false
  }).then((result)=>{
    console.log(result);
  });

  db.collection('Users').findOneAndUpdate({
    name:'Joe'
  },{
    $set: {
      name:'Sawan'
    }
  },{
    returnOriginal: false
  }).then((result)=>{
    console.log(result);
  });

  db.close();
});
