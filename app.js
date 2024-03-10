const ex = require("express");
const bp = require("body-parser");
const mongoose = require("mongoose");
const { error } = require("console");
const path = require("path");
mongoose.connect("mongodb://127.0.0.1:27017/hackathon");
var db = mongoose.connection;
db.on("error", function () {
  if (error) {
    console.log("error");
  }
});
db.once("open", function () {
  console.log("success");
});
const app = ex();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname));

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

app.get("/", function (req, res) {
  res.render("web3");
});

app.get("/form.ejs", function (req, res) {
  res.render("form.ejs");
});
app.post("/sala", function (req, res) {
  var name = req.body.name;
  var phone = req.body.phone;
  var gen = req.body.gen;
  var age = req.body.age;
  var bg = req.body.bg;
  var Health_condition = req.body.Health_condition;
  var Date = req.body.Date;

  var data = {
    name: name,
    phone: phone,
    age: age,
    gender: gen,
    bloodgroup: bg,
    Health_condition: Health_condition,
    Date: Date,
  };

  db.collection("TRINIT_Hackathon").insertOne(data, function (err, collection) {
    if (err) {
      console.log("error saving to database");
    }
    res.render("tq");
  });
});

app.listen(5000);
