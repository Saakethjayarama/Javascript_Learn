const RadioButtonHelper = require("../helpers/RadioButtonHelper");

module.exports = {
  get: (req, res) => {
    rbh = new RadioButtonHelper("");
    res.render("Gender", { gender: "", helper: rbh });
  },
  post: (req, res) => {
    const { gender } = req.body;
    rbh = new RadioButtonHelper(gender);
    res.render("Gender", { gender, helper: rbh });
  },
};
