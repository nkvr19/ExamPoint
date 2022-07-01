const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
require('./mongoose');
const Teacher = require('./schemas/teacherSchema');
const Student = require('./schemas/studentSchema');
const { read } = require('fs');
app.post('/addteacher', async (req, res) => {
  //   console.log(req.body);
  const teacher = new Teacher(req.body);
  try {
    const check = await Teacher.findOne({ uId: req.body.uId });
    const check1 = await Student.findOne({ uId: req.body.uId });
    if (check || check1) {
      return res.status(400).send('Unique ID is Already Existing');
    }
    await teacher.save();
    res.status(201).send('Accout is Successfully Created');
  } catch (e) {
    res.status(400).send(e);
  }
});

app.post('/addstudent', async (req, res) => {
  //console.log(req.body);
  const student = new Student(req.body);
  try {
    var check = await Student.findOne({ uId: req.body.uId });
    var check1 = await Teacher.findOne({ uId: req.body.uId });

    if (check || check1) {
      return res.status(400).send('Unique ID is Already Existing');
    }
    await student.save();
    res.status(201).send('Account is Successfully Created');
  } catch (e) {
    res.status(400).send(e);
  }
});
app.post('/login', async(req, res));

app.listen(3000, () => {
  console.log('Server Started');
});
