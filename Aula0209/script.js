const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/escola',
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


const alunoSchema = new mongoose.Schema({
    nome : String, 
    idade : Number,
    turma : String
});

const Alunos = mongoose.model('Alunos',alunoSchema)

Alunos.insertMany([
    {nome: 'Maria',idade : 15,turma : 'Turma1'},
    {nome: 'Paulo',idade : 16,turma : 'Turma2'},
    {nome: 'Pedro',idade : 17,turma : 'Turma3'}
])

async function alunos() {
    try {
        const alunes= await Alunos.find({});
        console.log(alunes);
    }
    catch(error) {
        console.log('erro: '+error)
    }
    db.dropDatabase()
}


function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  
async function acharAlunos() {
    alunos()
    await delay(1000);
    mongoose.connection.close()
}

acharAlunos()

