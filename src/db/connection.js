const mongoose= require("mongoose");

mongoose.connect("mongodb://localhost:27017/registrationPage",{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  family:4,
}).then(() => {
  console.log("connection successful");
}).catch((e)=>{
  console.log(e);
})