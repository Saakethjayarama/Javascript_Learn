const mongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const ObjectId = require("mongodb").ObjectId;

mongoClient.connect(url, (err, client) => {
  if (err) throw err;
  const db = client.db("node_db");
  //   db.collection("students").findOne(
  //     {
  //       _id: ObjectId("5f58b931b154a4170072e4bd"),
  //     },
  //     (err, result) => {
  //       if (err) throw err;
  //       console.log(result);
  //     }
  //   );

  //   db.collection("students")
  //     .find({})
  //     .toArray((err, result) => {
  //       if (err) throw err;
  //       console.log(result);
  //     });

  db.collection("students")
    .find({}, { projection: { name: 1, _id: 0 } })
    .toArray((err, result) => {
      if (err) throw err;
      console.log(result);
      client.close();
    });

  db.collection("students")
    .find({}, { projection: { name: 1, _id: 0 } })
    .limit(5)
    .toArray((err, result) => {
      if (err) throw err;
      console.log(result);
      client.close();
    });
});
