const mongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/nodedb";

mongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log("Database created");
  db.close();
});
