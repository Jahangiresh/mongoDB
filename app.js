// var mongo = require('mongodb')
var mongoClient = require("mongodb").MongoClient;
var url =
  "mongodb+srv://databasetest:databasetest@cluster0.qlehyyh.mongodb.net/testDB?retryWrites=true&w=majority";

mongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("testDB");

  dbo.collection("testdbs2").drop((err, res) => {
    if (err) throw err;
    if (res) console.log("del");

    db.close();
  });
});
