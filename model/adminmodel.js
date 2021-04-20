const mongoose=require('mongoose');

var adminSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'name should be left blank']
    },
    email:{
        type:String,
        unique:[true,'email Already Exist']
    },
    contact:{
        type:String,

    },
    password:{
        type:String,
        required:[true,'password should not left empty'],
        minlength:[4,'passsword should be greater than 4']
    },
    saltString:{type:String}
})


adminSchema.pre('save',function(next){
    bcrypt.genSalt(15,(err,salt)=>{
        bcrypt.has(this.password,salt,(err,hash)=>{
            this.password=hash,
            this.saltString=salt
            next();
        })
    })
});