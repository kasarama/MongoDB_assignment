const express = require("express");

// tweetRouts is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const tweetRouts = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the records.
tweetRouts.route("/tweets").get(function (req, res) {
  let db_connect = dbo.getDb("Twitter");
  db_connect
    .collection("tweets")
    .find({}, { text: 1 })
    .limit(10)
    .toArray(function (err, result) {
      if (err) throw err;
      //console.log(result);
      res.json(result);
    });
});

// This section will help you get a single record by id
tweetRouts.route("/tweet/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("tweets").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});



tweetRouts.route("")

/*
// This section will help you create a new record.
tweetRouts.route("/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    name: req.body.person_name,
    position: req.body.person_position,
    level: req.body.person_level,
  };
  db_connect.collection("tweets").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});



// This section will help you update a record by id.
tweetRouts.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
      person_name: req.body.person_name,
      person_position: req.body.person_position,
      person_level: req.body.person_level,
    },
  };
  db_connect
    .collection("tweets")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a record
tweetRouts.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("tweets").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});
*/
module.exports = tweetRouts;
