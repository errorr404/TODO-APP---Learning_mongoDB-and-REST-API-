// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) =>{
  if(err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text:'Something to do'}).then((result) =>{
  //   console.log(result);
  // });
  // deleteOne

  // db.collection('Todos').deleteOne({text:'Something to do'}).then((result) =>{
  //   console.log(result);
  // });

  // findOneAndDelete

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
  //   console.log(result);
  // });

  // challange
  // deleteMany from Users collection with name Dixit

  // db.collection('Users').deleteMany({name:'Dixit'}).then((result)=>{
  //   console.log(result);
  // });

  // deleteOne from Users with name Dixit

  // db.collection('Users').deleteOne({name: 'Dixit'}).then((result)=>{
  //   console.log(result);
  // });

// findOneAndDelete from users with name Sawan.

  db.collection('Users').findOneAndDelete({name:'sawan'}).then((result)=>{
    console.log(result);
  });


  db.close();
});
