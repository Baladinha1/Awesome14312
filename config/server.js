var express = require('express');
var app = express();

var mongoose = require('mongoose')
var conexao = ()=>{
    var caminho = mongoose.connect('mongodb+srv://awesome:Festa10@cluster0.ysp4r.mongodb.net/mongoatlas?retryWrites=true&w=majority')
}
var schema = mongoose.Schema
var depoimentos = new schema({
    nome:String,
    cargo:String,
    mensagem:String,
})
var documentos = mongoose.model('depoimentos',depoimentos)

var porta = process.env.PORT||5555;

app.use(express.static('./'));

module.exports = {app,porta,conexao,documentos}
