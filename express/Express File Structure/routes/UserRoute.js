const router = require("express").Router();
const userController = require("../controllers/UserController");

router.get("/", userController.get);

module.exports = router;
