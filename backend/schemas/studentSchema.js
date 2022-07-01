const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  collegeName: {
    type: String,
    required: true,
  },
  uId: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});
const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
