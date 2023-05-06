const express = require("express");
const router = express.Router();
const validator = require("../Middlewares/logging");
const StudentController = require("../controllers/student_controller");


router.param("id", (req, res, nxt, val) => {
  if (Number(val)) {
    req.id = val;
    nxt();
  } else {
    res.send("invalid url");
  }
});
router.post("/", (req, res) => {
    let valid = validator(req.body);
    if(valid){
        req.body.id = Students.length + 1;
        Students.push(req.body);
        res.send(req.body);
    }else{
        res.send("invalid information")
    }
  
});
router.get("/", StudentController.getAllStudent);
router.get("/:id", StudentController.getStudent);

router.put("/:id", (req, res) => {
  let index = Students.findIndex((val) => val.id == req.params.id);
  if (index != -1) {
    for (i in req.body) {
      Students[index][i] = req.body[i];
    }
    res.send(Students[index]);
  }
});

module.exports = router;