const express=require('express');
const app=express();
const { appendFile } = require('fs');
const path=require('path');
const PORT= process.env.PORT||3000;
const mainRouter=require('./router/index');
require('./Database/connection/conn');
const ParentRegister= require('./Database/models/Parent');
const ServicerRegister= require('./Database/models/servicer');
const Hire=require('./Database/models/hire');
const { prependListener } = require('process');
const Review=require('./Database/models/feedback');
const multer = require('multer');


//ejs set
app.set('view engine','ejs');
// Css,image,js set
app.use(express.static('public'));
app.use('/css',express.static(__dirname+'public/css'));
app.use('/image',express.static(__dirname+'public/image'));
app.use('/js',express.static(__dirname+'public/js'));

// Database

app.use(express.json());
app.use(express.urlencoded({extended:false}));



// router
app.use(mainRouter);

app.listen(PORT,()=>{
    console.log(`server listening on Port ${PORT}`);
})