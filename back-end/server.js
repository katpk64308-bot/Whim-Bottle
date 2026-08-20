const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'WHIM'
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.get('/index.html', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});
//==================================================
app.post("/login", (req, res) => {

    const { nome, email, senha } = req.body;

    const sql = "SELECT * FROM usuarios WHERE nome = ? AND email = ? AND senha = ?";

    connection.query(sql, [nome, email, senha], (err, resultado) => {

        if (err) {
            console.error(err);

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro no servidor"
            });
        }

        if (resultado.length === 0) {
            return res.json({
                sucesso: false,
                mensagem: "Nome, email ou senha incorretos"
            });
        }

        const usuario = resultado[0];

        res.json({
            sucesso: true,
            nome: usuario.nome
        });
    });

});
//==================================================

app.post('/adicionar', function (req, res) {
    const values = [req.body.nome, req.body.email, req.body.senha];

    const insert = `
        INSERT INTO usuarios (nome, email, senha) SELECT ?, ?, ? WHERE NOT EXISTS (
        SELECT 1 FROM usuarios WHERE LOWER(email) = LOWER(?)
        )
    `;

    connection.query(insert, [...values, req.body.email], function (err, resultado) {
        if (err) {
            console.error('Dados não inseridos:', err);
            return res.status(500).send('Erro ao cadastrar usuário');
        }
        if (resultado.affectedRows === 0) {
            return res.status(409).send('Este Gmail já está cadastrado.');
        }

        console.log('Conta criada com sucesso!');
        res.redirect('/main.html');
    });
});

/* app.get('/listar', function (req, res) {
    connection.query('SELECT * FROM usuarios', function (err, rows) {
        if (err) return res.status(500).send('Erro ao listar usuários');

        res.send(`
    <!DOCTYPE html>
    <html lang="pt-br">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" href="/css/index.css">

        <title>Verificar usuário</title>
    </head>

    <body>
<br><br><br><br>
        <div class="container">

            <h2>Verificar usuário</h2>
            <br><br>

            <form action="/verificar-usuario" method="POST">

                <label for="nome">Nome:</label>

                <input
type="text" 
id="nome" 
name="nome"
 placeholder="Digite seu nome" 
 required>
                <br><br>

                <label for="email">Email: </label>

                <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Digite seu email"
                required>

                <br><br>

                <button type="submit" class="button">Verificar</button>
                <br><br><br>
            </form>

            <a href="/main.html">
                Voltar
            </a>

        </div>

    </body>

    </html>
`);
    });
});

*/

app.get('/deletar/:id', function (req, res) {
    connection.query('DELETE FROM usuarios WHERE id = ?', [req.params.id], function (err) {
        if (err) return res.status(500).send('Erro ao excluir usuário');
        res.redirect('/listar');
    });
});

/* app.get('/atualizar-form/:id', function (req, res) {
    connection.query('SELECT * FROM usuarios WHERE id = ?', [req.params.id], function (err, result) {
        if (err) return res.status(500).send('Erro ao obter dados do usuário');
        if (result.length === 0) return res.status(404).send('Usuário não encontrado');

        const usuario = result[0];
        res.send(`
    <!DOCTYPE html>
    <html lang="pt-br">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/css/index.css">
        <title>Atualizar conta</title>
    </head>

    <body>
<br><br><br><br>
        <div class="container">

            <h2>Atualizar conta</h2>
            <br>
            <br>

            <form action="/atualizar/${req.params.id}" method="POST">

                <label for="nome">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    value="${usuario.nome}"
                    placeholder="Digite seu nome"
                    required
                >
                <br><br>

                <label for="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value="${usuario.email}"
                    placeholder="Digite seu email"
                    required
                >
                <br><br>

                <label for="senha">Senha:</label>
                <input
                    type="password"
                    id="senha"
                    name="senha"
                    value="${usuario.senha}"
                    placeholder="Digite sua senha"
                    required
                >
                <br><br>

                <button type="submit" class="button">
                    Atualizar
                </button>

                <br><br><br>

            </form>

            <a href="/listar">
                Voltar
            </a>

        </div>

    </body>
    </html>
`);
    });
});

*/

/* app.post('/atualizar/:id', function (req, res) {
    const update = 'UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id = ?';
    connection.query(update, [req.body.nome, req.body.email, req.body.senha, req.params.id], function (err) {
        if (err) return res.status(500).send('Erro ao atualizar usuário');
        res.redirect('/listar');
    });
}); */

app.listen(8083, function () {
    console.log('Servidor rodando na url http://localhost:8083/index.html');
});
