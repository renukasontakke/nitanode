var express = require("express");
var adminrouter =  express();

adminrouter.get("/", function(req, res){
    res.send("All Admin");
});
module.exports = adminrouter;