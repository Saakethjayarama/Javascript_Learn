const RadioButtonHelper = require("../helpers/RadioButtonHelper");
const studentDaoImpl = require("../models/StudentDaoImpl");

module.exports = {
  get: (req, res) => {
    res.render("Update", {
      usn: "",
      name: "",
      gender: "",
      phone: "",
      email: "",
      city: "",
      helper: new RadioButtonHelper(""),
      status: "",
    });
  },
  post: (req, res) => {
    const { gender } = req.body;
    const rh = new RadioButtonHelper(gender);
    studentDaoImpl.editStudent({ ...req.body }, (err, result) => {
      if (err) {
        res.render("Update", { ...req.body, helper: rh, status: err });
        return;
      } else {
        res.render("Update", {
          ...req.body,
          helper: rh,
          status: "Updation done",
        });
      }
    });
  },
};
