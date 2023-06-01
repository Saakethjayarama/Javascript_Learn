const studentDaoImpl = require("../models/StudentDaoImpl");

module.exports = {
  get: (req, res) => {
    res.render("Delete", { message: "", usn: "" });
  },
  post: (req, res) => {
    const { usn } = req.body;
    studentDaoImpl.deleteStudent(usn, () => {
      res.render("Delete", { message: "Done!", usn });
    });
  },
};
