// mongodb://localhost:27017

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
    matricula : String,
    nome : String, 
    idade : Number,
    turma : String
});

const Aluno = mongoose.model("Aluno", alunoSchema)

const paulo = new Aluno({
    matricula : 'rm201',
    nome : "Paulo da Silva",
    idade : 18,
    turma : '2MIA'
})

paulo.save();

const maria = new Aluno({
    matricula : 'rm202',
    nome : "Maria da Silva",
    idade : 18,
    turma : '2MIA'
})

maria.save();


async function alunos() {
    const alunes= await Aluno.find({});
    alunes.forEach(function(alune){
        console.log(alune);
    });
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  
async function test() {
    alunos()
    await delay(5000);
    mongoose.connection.close()
}

test()


