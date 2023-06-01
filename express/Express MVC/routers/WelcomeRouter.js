const router = require("express").Router();
const controller = require("../controllers/WelcomeController");
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true })); // to get the form body as res.body

router.get("/", controller.get);
router.post("/", controller.post);

module.exports = router;
