const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/olympics",{
    useNewUrlParser : true,
    useUnifiedTopology : true
} ).then(()=>{
    console.log("conncetion is successful")
}).catch((e)=>{
    console.log(e);
})