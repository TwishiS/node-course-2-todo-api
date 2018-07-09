// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID} =require('mongodb');


// var obj=new ObjectID();
// console.log(obj);

// var user={name:'twishi',age:25};
// var {name}=user;
// console.log(name);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err)
  {
  return  console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed:false
  // }, (err,result)=>{
  //   if(err){
  //     return console.log('Unable to insert Todo ',err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

// db.collection('Users').insertOne({
//   // _id:123,
//   name:'Twishi',
//   age:20,
//   location:'Philadelphia'
// },(err,result)=>{
//   if(err)
//   {
//     return console.log('Unable to insert user ',err);
//   }
//
//   console.log(result.ops[0]._id.getTimestamp());
// });

  db.close();
});
