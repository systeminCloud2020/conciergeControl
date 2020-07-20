const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./conciergeControl.db')

db.serialize(function() {
    //Criar a tabela
    db.run(`
    CREATE TABLE IF NOT EXISTS ocorrencias(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        data TEXT,
        nome TEXT,
        titulo TEXT,
        descricao TEXT,
        image1 TEXT,
        image2 TEXT,
        image3 TEXT
    );
    `)

    //Inserir dados

    //Consultar dados

    //Deletar dados
})