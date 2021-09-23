var server = require('./config/server')
var app = server.app
var porta = server.porta
var conexao = server.conexao
var documentos = server.documentos

app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/',(req,res)=>{
    conexao()
    documentos.find().limit(3).sort({'_id':-1})
    .then((documentos)=>{
        console.log(documentos)
        res.render('index',{documentos})
    }) 
})

app.listen(porta)