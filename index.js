const express = require("express");
const path = require("path");
const app = express();
const Ajv = require("ajv");
const CookieParser = require("cookie-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const studentRouter = require("./Routes/students.js");
app.use(express.urlencoded({extended:true}));
app.use(CookieParser());
app.set("template engine","ejs");
app.use("/api/students",studentRouter);

const port = process.env.PORT ||3000;

const studentSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trim:true
    },
    lname:{
        type:String,
        required:true,
        trim:true
    },
    dept:{
        type:String,
        enum:['is','cs','it']
    },
    id:{
        type:Number,
        required:true,
        unique:true
    }

})



app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/index.html"));
})
app.post("/welcome.html",(req,res)=>{
    res.cookie("username",Buffer.from(req.body.fname).toString("base64"));
    res.cookie("usage",25,{httpOnly:true});
    res.send(`thanks ${req.body.fname}`);
})
app.get("/abc",(req,res)=>{
    console.log(Buffer.from(req.cookies.usernm,'base64').toString());
    console.log(req.cookies.age);

    res.sendStatus(200);
})
app.get("/welcome.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"/welcome.html"));
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})