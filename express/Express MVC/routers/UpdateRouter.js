const router = require("express").Router();
const controller = require("../controllers/EditController");
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", controller.get);
router.post("/", controller.post);

module.exports = router;
