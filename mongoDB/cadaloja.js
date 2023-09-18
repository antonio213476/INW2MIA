const mongoose = require('mongoose')
const fs = require('fs')
const csv = require('csv-parser')

mongoose.connect('mongodb://127.0.0.1:27017/loja',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 20000
})

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function(){
    console.log("Estamos conectados ao mongodb")
})


const produtoSchema = new mongoose.Schema({
    codigo : String,
    descricao : String, 
    valor : Number,
    estoque : Number
});

const Produtos = mongoose.model('Produtos', produtoSchema)

function lerCSVsalvarMongo(){
    const resultados = []
    
    fs.createReadStream('base.csv')
    .pipe(csv())
    .on('data', (dados)=>{
        resultados.push(dados);
    })
    .on('end', ()=>{
        Produtos.insertMany(resultados)
        .then(()=>{
            console.log('Dados importados com sucesso');
        })
        .catch((err)=>{
            console.log('Erro ao importar os dados: '+err)
        })
        mongoose.connection.close();
    })
}

