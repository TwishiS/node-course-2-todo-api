// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID} =require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err)
  {
  return  console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

//updating Todos collection
//findOneAndupdate
// db.collection('Todos').findOneAndUpdate({
//   _id:new ObjectID("5b432fa64fde167b2e49fdb5")
// },{
//   $set:{
//     completed:true
//   }
// },{
//   returnOriginal:false
// }).then((result)=>{
//   console.log(result);
// });

//updating Users collection
db.collection('Users').findOneAndUpdate({
name:'Twishi'
},{
  $set:{
  name:'Twishi'
    },
  $inc:{
    age:1
  }
  },{
  returnOriginal:false
  }).then((result)=>{
  console.log(result);
});

//db.close();
});
