let express = require('express');
let app = express();
require('dotenv').config()

// console.log("Hello World")

let absolutePath = __dirname + '/views/index.html'
app.use("/public", express.static(__dirname + "/public"));


app.get('/', function(req,res){
    res.sendFile(absolutePath);
})


app.get('/json', function(req, res){
    if (process.env.MESSAGE_STYLE == "uppercase"){
        res.json({"message": "HELLO JSON"})
    }else{
        res.json({"message": "Hello json"});
    }
})


































 module.exports = app;
