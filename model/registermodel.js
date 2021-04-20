const mongoose=require('mongoose');

var newUserSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'name should be empty']
    },
    email:{
        type:String,
        unique:true,
    },
    marks:{
        type:Number,
        max:[6,'number should be greater than 6'],  
        min:2,
    }
})

mongoose.model('register',newUserSchema)