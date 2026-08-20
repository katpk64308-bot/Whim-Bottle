const pagina = {

  Registrar: `
        <div class="container">
            <h2>Cadastro</h2><br>

            <form action="/adicionar" method="POST">

                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required><br><br>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Digite seu email" required><br><br>

                <label for="senha">Senha:</label>
                <input type="password" id="senha" name="senha" placeholder="Digite sua senha" required><br><br>

                <label for="confirmaSenha">Confirme sua senha:</label>
                <input type="password" id="confirmaSenha" name="confirmaSenha" placeholder="Confirme sua senha" required><br><br>

                <button type="submit" class="button">Criar</button><br><br><br>

            </form>
        </div>
    `,

  login: `
        <div class="container">
            <h2>Login</h2><br><br>

            <form onsubmit="login(); return false;">

                <label for="loginNome">Nome:</label>
                <input type="text" id="loginNome" name="nome" placeholder="Digite seu nome" required><br><br>

                <label for="loginEmail">Email:</label>
                <input type="email" id="loginEmail" name="email" placeholder="Digite seu email" required><br><br>

                <label for="loginSenha">Senha:</label>
                <input type="password" id="loginSenha" name="senha" placeholder="Digite sua senha" required><br><br>

                <button type="submit" class="button">Entrar</button><br><br><br>

            </form>
        </div>
    `
};

function Registrar(aba) {
  document.getElementById('conteudo').innerHTML = pagina[aba];
}

window.Registrar = Registrar;

Registrar('Registrar');

window.login = async function login() {

  const nome = document.getElementById("loginNome").value;
  const email = document.getElementById("loginEmail").value;
  const senha = document.getElementById("loginSenha").value;

  const resposta = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({nome: nome, email: email, senha: senha})
  });

  const dados = await resposta.json();

  if (dados.sucesso) {
    window.location.href = "/main.html";
  } else {
    alert(dados.mensagem);
  }
};
