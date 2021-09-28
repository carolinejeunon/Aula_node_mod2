const express = require("express");
const app = express();

app.get("/", function (req, res){
    res.send("Hello bluemer");
});

app.get("/QuemSomos", function (req, res){
    res.send("Quem Somos");
});

app.get("/Cole", function (req, res){
    res.send("Teste de leve");
});

//app.post
//app.put
//app.delete

app.listen(3000);