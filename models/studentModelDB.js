const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/iti");
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

const studentModel = mongoose.model("students",studentSchema);
module.exports = studentModel;