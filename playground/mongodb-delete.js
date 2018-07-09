// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID} =require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err)
  {
  return  console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  //deletemany
 //   db.collection('Users').deleteMany({name:'Twishi'}).then((result)=>{
 //  console.log(result);
 // });

  //deleteone
  // db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=>{
  //   console.log(result);
  // });

  //findoneanddelete
  db.collection('Users').findOneAndDelete({
    _id:new ObjectID("5b4314af9c479b1b64c54b96")
  }).then((result)=>{
    console.log(JSON.stringify(result,undefined,2));
 });
//db.close();
});
