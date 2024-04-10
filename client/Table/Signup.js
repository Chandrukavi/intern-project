const mongoose =require('mongoose')


const HRSchema =new mongoose.Schema({
    username:String,
    email: {type :String , required : true},
    password :{ type: String ,required :true} 

})

const HRmodel =mongoose.model("HRLOGIN",HRSchema)
module.exports=HRmodel