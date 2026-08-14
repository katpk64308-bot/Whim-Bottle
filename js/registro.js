const pagina = {

  Registrar: `
    <div class="container">
      <h2>Cadastro</h2><br>

      <form onsubmit="event.preventDefault();">

        <label>Nome:</label>
        <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required><br><br>

        <label>Email:</label>
        <input type="email" id="email" name="email" placeholder="Digite seu email" required><br><br>

        <label>Senha:</label>
        <input type="password" id="senha" name="senha" placeholder="Digite sua senha" required><br><br>

        <label>Confirme sua senha:</label>
        <input type="password" id="confirmaSenha" name="confirmaSenha" placeholder="Confirme sua senha" required><br><br>

        <button type="submit" class="button">Criar</button><br><br><br>

      </form>
    </div>
  `,

  login: `
    <div class="container">
      <h2>Login</h2><br>

      <form onsubmit="event.preventDefault(); entraADM();">

        <label>Nome:</label>
        <input type="text" id="loginNome" name="loginNome" placeholder="Digite seu nome" required><br><br>

        <label>Email:</label>
        <input type="email" id="loginEmail" name="loginEmail" placeholder="Digite seu email" required><br><br>

        <label>Senha:</label>
        <input type="password" id="loginSenha" name="loginSenha" placeholder="Digite sua senha" required><br><br>
        
        <li type="button" onclick="Registrar('REsenha')">esqueceu a senha</li><br><br><br>
        <button type="submit" class="button">Entra</button><br><br><br><br>


      </form>
    </div>
  `
};


function Registrar(aba) {

  document.getElementById('conteudo').innerHTML = pagina[aba];

}


function entraADM() {

  const nome = document.getElementById("loginNome").value;
  const email = document.getElementById("loginEmail").value;
  const senha = document.getElementById("loginSenha").value;

  if (
    nome === "ADM" &&
    email === "adm@gmail.com" &&
    senha === "adm123"
  ) {

    localStorage.setItem("logado", "true");

    window.location.href = "main.html";

  } else {

    alert("Nome, e-mail ou senha incorretos.");

  }
}


window.Registrar = Registrar;
window.entraADM = entraADM;


Registrar('Registrar');
