const express =require("express");
const mongoose =require("mongoose");
const cors =require("cors");
const HRmodel =require('./Table/Signup')


const app=express();
app.use(express.json());
app.use(cors());




mongoose.connect("mongodb+srv://Chandrukavi:Chandrukavi%401704@cluster0.1559ems.mongodb.net/HRLOGIN?retryWrites=true&w=majority&appName=Cluster0")

const studentSchema = new mongoose.Schema({
  name: String,
  department: String,
  college: String,
  rollNumber: String,
  skills: [String]
});
const StudentModel = mongoose.model("Student", studentSchema);

// Route to handle student signup
app.post('/students', async (req, res) => {
  try {
    const newStudent = await StudentModel.create(req.body);
    res.json({ success: true, message: 'Student details saved successfully', data: newStudent });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to save student details', error: err });
  }
});


//SignUp


app.post('/signup',(req,res)=>{
  HRmodel.create(req.body)
      .then(User => res.json(User))
      .catch(err => res.status(500).json(err))
})


  // Login Route
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await HRmodel.findOne({ email, password });
      if (user) {
        res.json({ success: true, message: 'Login successful' });
        
      } else {
        res.status(401).json({ success: false, message: 'Invalid username or password' });
      }
    } catch (err) {
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });
 
app.listen(3000,()=>{
  console.log("server is running")
})


