const Student = require("../models/student_models");


const getAllStudent = (req, res) => {
    res.render("Students.ejs", {
      std: Student.fetchAllStudent(),
    });
};

const getStudent = (req, res) => {
    let id = req.id;
    const student = Students.find((val) => {
      return val.id == id;
    });
    res.json(student);
  };

const createStudent = (req,res)=>{
    let std = new Student(req.body);
    std.saveStudent();
    res.json(req.body);
}

module.exports = {getAllStudent,getStudent};