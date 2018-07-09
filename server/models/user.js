var mongoose=require('mongoose');
var User=mongoose.model('User',{
  email:{
    type:String,
    required:true,
    trim:true,
    minlength:1
  }
});

module.exports={User};
// var user=new User({email:'twishi.saran@gmail.com    '});
//
// user.save().then((doc)=>{
//   console.log('User saved ',doc);
// },(e)=>{
//   console.log('unable to Save user',e);
// });
