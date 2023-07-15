const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

let subjectArr = [];
let descArr = [];
let longdescArr = [];

app.get("/", function(req, res){
    res.render("index", {subject: subjectArr, desc: descArr});
})

app.get("/about", function (req, res) {
    res.render("about");
})

app.get("/contact", function(req, res) {
    res.render("contact");
})

app.get("/add-post", function(req, res) {
    res.render("addPost");
})

app.get("/blog", function(req, res) {
    res.render("blog");
})

app.post("/add-post", function(req, res) {
    let subject = req.body.subject;
    let desc = req.body.desc;
    let decsShort = desc.slice(0, 200);
    subjectArr.push(subject);
    descArr.push(decsShort);
    longdescArr.push(desc)
    // console.log(subject, desc);
    res.redirect("/");
})

app.post("/blog", function(req, res){
    let btn = Number(req.body.btn);
    let subject = subjectArr[btn];
    let desc = longdescArr[btn];
    res.render("blog", {subject: subject, desc: desc});
    
})

app.listen(3000, function(){
    console.log("Server is Running at : localhost:3000");
})