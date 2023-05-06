const studentModel = require("../models/studentModelDB");

//create student
const addNewStudent = (req,res)=>{
    let std = new studentModel({
        fname:req.body.fname,
        lname: req.body.lname,
        dept:req.body.dept,
        id:req.body.id
    })

    std.save().then(()=>res.send(std)).catch((err)=>{
        for(let e in err.errors){
            console.log(err.errors[e].message);
            res.status(400).send("bad request");
        }
    })
}

const getAllStudent = async (req,res)=>{
    let std = await studentModel.find().select({fname:1,lname:1,dept:1});
    res.send(std);
}

const getStudentById = async (req,res)=>{
    let std = await studentModel.findById(req.params.id);
    if(!std){
        res.status(404).send("not found");
    }else{
        res.send(std);
    }
}

const updateStudent = async (req,res)=>{
    let std = await studentModel.findOneAndUpdate(req.params.id,req.body,{
        returnOriginal:false
    })
    if(!std){
        res.status(404).send("bad request");
    }else{
        res.send(std);
    }
}

const deleteStudent = async (req,res)=>{
    let std = await studentModel.findOneAndRemove(req.params.id);
    if(!std){
        res.status(404).send("bad request");
    }else{
        res.send(std);
    }
}

module.exports = {
    addNewStudent,
    getAllStudent,
    getStudentById,
    updateStudent,
    deleteStudent
};