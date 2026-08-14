const pagina = {

  Registrar: `
    <div class="container">
      <h2>Cadastro</h2><br>

      <form onsubmit="event.preventDefault();">

        <label>Nome:</label><br>
        <input type="text" id="nome" name="nome" required><br><br>

        <label>Email:</label><br>
        <input type="email" id="email" name="email" required><br><br>

        <label>Senha:</label><br>
        <input type="password" id="senha" name="senha" required><br><br>

        <label>Confirme sua senha:</label><br>
        <input type="password" id="confirmaSenha" name="confirmaSenha" required><br><br>

        <button type="submit" class="button">Cadastrar</button><br><br><br>

        <button type="button" onclick="Registrar('login')">
          Login
        </button>

      </form>
    </div>
  `,

  login: `
    <div class="container">
      <h2>Login</h2><br>

      <form onsubmit="event.preventDefault(); entraADM();">

        <label>Nome:</label><br>
        <input type="text" id="loginNome" name="loginNome" required><br><br>

        <label>Email:</label><br>
        <input type="email" id="loginEmail" name="loginEmail" required><br><br>

        <label>Senha:</label><br>
        <input type="password" id="loginSenha" name="loginSenha" required><br><br>

        <button type="submit" class="button">Login</button><br><br><br>

        <button type="button" onclick="Registrar('Registrar')"> Registrar </button><br>

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