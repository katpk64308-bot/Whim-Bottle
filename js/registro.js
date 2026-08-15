const pagina = {

  Registrar: `
    <div class="container">
      <h2>Cadastro</h2><br>

      <form onsubmit="event.preventDefault();">

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
      <h2>Login</h2><br>

      <form onsubmit="event.preventDefault();">
        <label for="loginNome">Nome:</label>
        <input type="text" id="loginNome" name="loginNome" placeholder="Digite seu nome" required><br><br>

        <label for="loginEmail">Email:</label>
        <input type="email" id="loginEmail" name="loginEmail" placeholder="Digite seu email" required><br><br>

        <label for="loginSenha">Senha:</label>
        <input type="password" id="loginSenha" name="loginSenha" placeholder="Digite sua senha" required><br><br>

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
