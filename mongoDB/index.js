// mongodb://localhost:27017

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test',
    {userNewUrlParser : true, useUnifiedTopology: true});

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error: '))

    db.on('open', function(){
        console.log('Estamos conectados ao banco')
    })