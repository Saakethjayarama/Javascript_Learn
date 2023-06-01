const router = require("express").Router();
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true })); // to get the form body as res.body

const controller = require("../controllers/GenderController");

router.get("/", controller.get);
router.post("/", controller.post);

module.exports = router;
