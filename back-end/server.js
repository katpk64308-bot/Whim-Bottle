const express = require('express');
const cors = require('cors');

const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/tarefas', (req, res) => {

    const { titulo, descricao, status } = req.body;

    const sql = `
        INSERT INTO tarefas (titulo, descricao, status)
        VALUES (?, ?, ?)
    `;
    db.query(sql, [titulo, descricao, status], (erro) => {

        if (erro) {
            console.log(erro);
            res.status(500).send('Erro ao cadastrar');
        } else {
            res.send('Tarefa cadastrada!');
        }

    });

});

app.get('/tarefas', (req, res) => {

    const sql = 'SELECT * FROM tarefas';

    db.query(sql, (erro, resultados) => {

        if (erro) {
            console.log(erro);
            res.status(500).send('Erro ao buscar tarefas');
        } else {
            res.json(resultados);
        }

    });

});

app.put('/tarefas/:id', (req, res) => {

    const { id } = req.params;

    const { titulo, descricao, status } = req.body;

    const sql = `
        UPDATE tarefas
        SET titulo = ?, descricao = ?, status = ?
        WHERE id = ?
    `;

    db.query(sql, [titulo, descricao, status, id], (erro) => {

        if (erro) {
            console.log(erro);
            res.status(500).send('Erro ao atualizar');
        } else {
            res.send('Tarefa atualizada!');
        }

    });

});

app.delete('/tarefas/:id', (req, res) => {

    const { id } = req.params;

    const sql = 'DELETE FROM tarefas WHERE id = ?';

    db.query(sql, [id], (erro) => {

        if (erro) {
            console.log(erro);
            res.status(500).send('Erro ao excluir');
        } else {
            res.send('Tarefa excluída!');
        }

    });

});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});