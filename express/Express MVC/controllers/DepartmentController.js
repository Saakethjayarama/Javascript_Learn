const SelectBoxHelper = require("../helpers/SelectBoxHelper");

module.exports = {
  get: (req, res) => {
    sbh = new SelectBoxHelper("");
    res.render("Department", { department: "", helper: sbh });
  },
  post: (req, res) => {
    const { department } = req.body;
    sbh = new SelectBoxHelper(department);
    res.render("Department", { department, helper: sbh });
  },
};
