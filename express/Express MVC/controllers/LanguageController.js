const CheckBoxHelper = require("../helpers/CheckBoxHelper");

module.exports = {
  get: (req, res) => {
    const cbh = new CheckBoxHelper([]);
    res.render("Language", { languages: [], helper: cbh });
  },
  post: (req, res) => {
    const { language } = req.body;
    const cbh = new CheckBoxHelper(language);

    res.render("Language", { languages: language, helper: cbh });
  },
};
