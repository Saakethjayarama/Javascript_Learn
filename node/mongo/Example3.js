const mongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

mongoClient.connect(url, (err, client) => {
  if (err) throw err;
  db = client.db("node_db");
  var data = {
    name: "Saaketh",
    usn: "1JT18CS015",
  };
  db.collection("students").insertOne(data, (err, result) => {
    if (err) throw err;
    client.close();
  });
});
