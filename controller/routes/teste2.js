// Feito agora com o express
const express = require("express");

const app = express();


app.get("/", function(req, resp){
    resp.send("Bem-vindo ao meu app");
})

//esta deve ser sempre a última linha quando usamos o express
app.listen(8084, function(){
    console.log("Servidor funcionando na url http://localhost:8084");
});