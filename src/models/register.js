const { default: mongoose } = require("mongoose");
const mongose=require("mongoose");

const registerSchema=new mongose.Schema({
  firstname:{
    type:String,
    

  },
  lastname:{
    type:String,
    
  },
  email:{
    type:String,
    
    unique:true
  },
  password:{
    type:String,
    
  },
  repassword:{
    type:String,
    
  },
  gender:{
    type:String,
    
  },
  country:{
    type:String,
    
  }

})

const Register=new mongoose.model("Register",registerSchema);

module.exports=Register;