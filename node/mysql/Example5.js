const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "organization",
});

con.connect((err) => {
  if (err) throw err;
  const sql = "insert into roles(role_id, rele_desc) values('ceo', 'ceo')";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
});
