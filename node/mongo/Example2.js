const mongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

mongoClient.connect(url, (err, client) => {
  if (err) throw err;
  var dbObject = client.db("node_db");
  dbObject.createCollection("students", (err, result) => {
    if (err) throw err;
    console.log("collection created");
    client.close();
  });
});
