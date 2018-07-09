var mongoose=require('mongoose');

var Todo = mongoose.model('Todo',{
  text:{
    type:String,
    required:true,
    minlength:1,
    trim: true
  },
  completed:{
    type:Boolean,
    default:false
  },
  completedAt:{
    type:Number,
    default:null
  }
});

module.exports={Todo};
//save new details

// // var newTodo= new Todo({ //created instance
// //   text:'Cook dinner'
// // });
// //
// // newTodo.save().then((doc)=>{
// //   console.log('Saved Todo ',doc);
// // },(e)=>{
// //   console.log('Unable to save Todo.');
// // });//saving to database
//
// // var otherTodo= new Todo({ //created instance
// //   text:'Eat Lunch',
// //   completed:true,
// //   completedAt:123
// // });
//
// var otherTodo= new Todo({
//   text:'Do Something'
// });
// otherTodo.save().then((doc)=>{
//   console.log(JSON.stringify(doc,undefined,2));
// },(e)=>{
//   console.log('Unable to save Todo.',e);
// });//saving to database
