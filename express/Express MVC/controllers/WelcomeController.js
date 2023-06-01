module.exports = {
  get: (req, res) => {
    res.render("Welcome", { res: "", name: "" });
  },
  post: (req, res) => {
    const { name } = req.body;
    res.render("Welcome", { name, res: "Welcome " + name });
  },
};
