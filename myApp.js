let express = require('express');
let app = express();


// console.log("Hello World")

let absolutePath = __dirname + '/views/index.html'
app.use("/public", express.static(__dirname + "/public"));
app.get('/', function(req,res){
    res.sendFile(absolutePath)
})

// app.get('/', function(req,res){
//     res.send("Hello Express")
// })






























 module.exports = app;
