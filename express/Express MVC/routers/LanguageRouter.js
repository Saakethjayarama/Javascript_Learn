const router = require("express").Router();
const controller = require("../controllers/LanguageController");

const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", controller.get);
router.post("/", controller.post);

module.exports = router;
