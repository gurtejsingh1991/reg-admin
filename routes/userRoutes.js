var express=require('express');

var rana=require('../controller/usercontroller');

var approute=express.Router();
approute.post('/reg',rana.registerData);
approute.post('/admin',rana.addAdmin);

module.exports=approute;