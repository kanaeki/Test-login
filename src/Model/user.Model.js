

const mongoose=require('mongoose')

const userSchema=mongoose.Schema({

    Email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const userModel=mongoose.model('User',userSchema)
module.exports=userModel