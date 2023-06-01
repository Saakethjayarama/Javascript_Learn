const app = require("express")();

app.set("views", "views");
app.set("view engine", "ejs");

const welcomeRouter = require("./routers/WelcomeRouter");
app.use("/welcome", welcomeRouter);

const genderRouter = require("./routers/GenderRouter");
app.use("/gender", genderRouter);

const languageRouter = require("./routers/LanguageRouter");
app.use("/language", languageRouter);

const departmentRouter = require("./routers/DepartmentRouter");
app.use("/department", departmentRouter);

const studentsRouter = require("./routers/StudentsRouter");
app.use("/students", studentsRouter);

const insertRouter = require("./routers/InsertRouter");
app.use("/insert", insertRouter);

const updateRouter = require("./routers/UpdateRouter");
app.use("/update", updateRouter);

const deleteRouter = require("./routers/DeleteRouter");
app.use("/delete", deleteRouter);

app.listen(1500, () => {
  console.log("Listening on localhost");
});
