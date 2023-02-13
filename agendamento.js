(async () => {
    const database = require('./model/services/bd');
    const medico = require('./model/entities/medico');
    const paciente = require('./model/entities/paciente');
    try{
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error){
        console.log(error);
    }
})();

const express = require('express');
const app = express();

app.listen (8081, function(){
    console.info("Servidor funcionando");
})

