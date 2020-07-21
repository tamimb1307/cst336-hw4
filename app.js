const express = require("express");
const app = express();
var faker = require('faker');
app.engine('html', require('ejs').renderFile); 
app.use(express.static("public")); 

// Routes
app.get("/", function(req, res){
    res.render("index.ejs",  {
    
    future: faker.date.future()
    });

});

app.get("/automation", function(req, res){
    res.render("automation.ejs", {
    
    future: faker.date.future()
    });
});

app.get("/domaintrusts", function(req, res){
    res.render("domaintrusts.ejs", {
    
    future: faker.date.future()
    });
});

app.get("/userscomputers", function(req, res){
    res.render("userscomputers.ejs", {
    
    future: faker.date.future()
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});