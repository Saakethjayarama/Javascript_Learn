const router = require("express").Router();
const studentsController = require("../controllers/StudentsController");

router.get("/", studentsController.get);

module.exports = router;
