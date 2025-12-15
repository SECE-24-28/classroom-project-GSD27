const express =require("express")
const {createStudent,getAllStudents,getStudent,deleteStudent,updateStudent} =require("../controllers/studentController");


const router=express.Router();
router.post("/",createStudent) ;
router.get("/",getAllStudents);
router.get("/:rollno",getStudent);
router.delete("/:rollno",deleteStudent)
router.put("/:rollno",updateStudent);

module.exports=router;










