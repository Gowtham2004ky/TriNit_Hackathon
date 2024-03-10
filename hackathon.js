/* const ex= require("express")
const bp= require("body-parser")
const mongoose= require("mongoose")
 

mongoose.connect("mongodb://localhost:27017")
var db= mongoose.connection
db.on('error',function(){
    console.log("error!")
})
db.once("open",function(){
    console.log("success")
})
const app= ex()

app.set("view engine","ejs")
app.use(ex.static("views"))
app.use(bp.urlencoded({
    extended:true
})
app.use(bp.json())
)
app.get('/',function(req,res){
    res.render('index')
})
app.post('/hacakthon',function(req,res){
    var name= req.body.name;
    var email= req.body.email;
    var.phone= req.body.phone;
    var location= req.body.location;

    var data={
        "name"=name,
        "email"= email,
        "phone"= phone,
        "location"= location
    };
})

    db.collection("hackathon").insertOne(data,function(err,collection){
        if (err){
            console.log("no data inserted");
        }
        res.render('tq');
    });

app.listen(3000) */
const ex = require("express");
const bp = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/hackathon");
var db = mongoose.connection;
db.on('error', function () {
    console.log("error!");
});
db.once("open", function () {
    console.log("success");
});

const app = ex();

app.set("view engine", "ejs");
app.use(ex.static("view"));
app.use(bp.urlencoded({
    extended: true
}));
app.use(bp.json());

app.get('/', function (req, res) {
    res.render('hackathon');
});

app.post('/hackathon', function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var location = req.body.location;

    var data = {
        "name": name,
        "email": email,
        "phone": phone,
        "location": location
    };

    db.collection("hackathon").insertOne(data, function (err, collection) {
        if (err) {
            console.log("no data inserted");
        }
        res.render('tq');
    });
});

app.listen(3000, function () {
    console.log('Server is running on port 3000');
});
