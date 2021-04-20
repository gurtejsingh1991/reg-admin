
require('../model/registerModel');
require('../model/adminmodel')
const mongoose = require('mongoose');
var regData=mongoose.model('register');



module.exports.registerData=(req,res)=>{
    var newReg = new regData({
        name:req.body.uname,
        email:req.body.uemail,
        marks:req.body.umarks
    });

    newReg.save().then((docs)=>{
        return res.status(200).json({
            success:true,
            message:'New User registered',
            data:docs
        })
    })
    .catch((err)=>{
        return res.status(401).json({
            success:false,
            message:'Error in registering User',
            error:err.message
        })
    })
}

module.exports.addAdmin=(req,res)=>{
    var adData=new adminData({
        name:req.body.uname,
        email:req.body.uemail,
        contact:req.body.ucontact,
        password:req.body.upass
    })
    addData.save().then((docs)=>{
        return res.status(200).json({
            success:false,
            message:'error in adding data',
            error:err.message
        })
    })
}