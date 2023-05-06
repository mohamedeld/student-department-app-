const fs = require("fs");
const path = require("path");
const pstudent = path.join(path.dirname(process.mainModule.filename),"Data","Student.json");


class Student{
    constructor(name,dept){
        this.name = name;
        this.dept =dept;
        this.id = Students.length +1;
    }
    saveStudent(){
        fs.readFile(pstudent,(err,info)=>{
            if(!err){
                let Students = [];
                Student = JSON.parse(info);
                // update
                this.id = Students.length+1;
                Students.push(this);
                //write into json file
                fs.writeFile(pstudent,JSON.stringify(Students),(err)=>{
                    if(err){
                        console.log("error occurred");
                    }
                })
            }
        })
        Students.push(this);
    }
    static fetchAllStudent(){
        return Students;
    }
}
module.exports = Student;