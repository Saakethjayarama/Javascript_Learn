const studentDaoImpl = require("../models/StudentDaoImpl");

module.exports = {
  get: (req, res) => {
    studentDaoImpl.getAllStudents((err, students) => {
      if (err) throw err;
      res.render("Students", { students });
    });
  },
};
