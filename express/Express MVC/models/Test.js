const studentDaoImpl = require("./StudentDaoImpl");

studentDaoImpl.deleteStudent("CS015", (err, result) => {
  if (err) throw err;
  console.log(result);
});
