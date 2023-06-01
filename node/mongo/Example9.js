const mongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;
const url = "mongodb://localhost:27017";

mongoClient.connect(url, (err, client) => {
  if (err) throw err;

  const db = client.db("node_db");
  const query = {
    _id: ObjectId("5f58b931b154a4170072e4be"),
  };
  const val = {
    $set: {
      name: "Chakuliiiiiii",
    },
  };
  db.collection("students").updateOne(query, val, (err, result) => {
    if (err) throw err;
    console.log(result);
    client.close();
  });
});
