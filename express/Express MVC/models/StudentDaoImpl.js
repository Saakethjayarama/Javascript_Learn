const { query } = require("express");
const connection = require("./Connection");

module.exports = {
  getAllStudents: (callback) => {
    const con = connection();

    con.connect((err) => {
      if (err) {
        callback(err);
        return;
      }
      con.query("select * from students", (err, result) => {
        if (err) {
          callback(err);
          return;
        }
        const students = [];
        result.forEach((student) => {
          students.push(student);
        });
        con.end();
        callback(null, students);
      });
    });
  },

  insertStudent: (data, callback) => {
    const con = connection();

    con.connect((err) => {
      if (err) {
        callback(err);
        return;
      }

      const sql = "insert into students values (?,?,?,?,?,?)";
      const values = [
        data.usn,
        data.name,
        data.gender,
        data.phone,
        data.email,
        data.city,
      ];

      con.query(sql, values, (err, result) => {
        if (err) {
          callback(err);
          return;
        }
        con.end();
        callback(null, result);
      });
    });
  },

  editStudent: (data, callback) => {
    const con = connection();

    const query =
      "update students set name = ?, gender = ?, phone_number = ?, email = ?, city = ? where usn = ? ";

    const values = [
      data.name,
      data.gender,
      data.phone,
      data.email,
      data.city,
      data.usn,
    ];

    con.connect((err) => {
      if (err) {
        callback(err);
        return;
      }

      con.query(query, values, (err, result) => {
        if (err) {
          callback(err);
          return;
        }
        con.end();
        callback(null, result);
      });
    });
  },

  deleteStudent: (usn, callback) => {
    const con = connection();
    const query = "delete from students where usn = ?";
    const values = [usn];

    con.connect((err) => {
      if (err) {
        callback(err);
        return;
      }

      con.query(query, values, (err, result) => {
        if (err) {
          callback(err);
          return;
        }

        con.end();
        callback(null, result);
      });
    });
  },
};
