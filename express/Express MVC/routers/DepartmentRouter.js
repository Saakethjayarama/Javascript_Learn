const router = require("express").Router();
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));

const controller = require("../controllers/DepartmentController");

router.get("/", controller.get);
router.post("/", controller.post);

module.exports = router;
