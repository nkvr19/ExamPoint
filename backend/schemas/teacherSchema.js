const mongoose = require('mongoose');
const teacherSchema = mongoose.Schema({
  teacherName: {
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
const Teacher = mongoose.model('Teacher', teacherSchema);
module.exports = Teacher;
