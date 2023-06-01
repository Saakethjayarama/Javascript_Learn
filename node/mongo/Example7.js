const mongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

mongoClient.connect(url, (err, client) => {
  if (err) throw err;

  const db = client.db("node_db");
  db.collection("students")
    .find({})
    .sort({ name: 1 })
    .toArray((err, result) => {
      if (err) throw err;
      console.log(result);
      client.close();
    });
});
