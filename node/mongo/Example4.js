const mongodb = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

mongodb.connect(url, (err, client) => {
  if (err) throw err;
  const db = client.db("node_db");

  const students = [
    {
      name: "Vijay athreyasa",
      usn: "1JT18CS016",
    },
    {
      name: "Chakli",
      usn: "1JT18CS217",
    },
    {
      name: "Nippat",
      usn: "1JT18CS037",
    },
    {
      name: "Kodbale",
      usn: "1JT18CS417",
    },
    {
      name: "Obbat",
      usn: "1JT18CS517",
    },
    {
      name: "Techie",
      usn: "1JT18CS911",
    },
  ];

  db.collection("students").insertMany(students, (err, result) => {
    if (err) throw err;
    console.log(result.insertedIds);
    client.close();
  });
});
