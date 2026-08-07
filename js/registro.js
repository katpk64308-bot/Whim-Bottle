window.Registrar = Registrar
window.Registrar = Registrar
window.entraADM = entraADM
const pagina = {
  //===================================
  Registrar: `
        <div class="container">
        <h2>Cadastro</h2> <br>
        <form>
      <label>Nome:</label><br>
      <input type="text" required><br><br>
      <label>Email:</label><br>
      <input type="email" required><br><br>
      <label>Senha:</label><br>
      <input type="password" name="senha" required><br><br>
      <label>Confime sua senha:</label><br>
      <input type="password" name="senha" required><br><br>
      <button type="submit" class="button">Cadastrar</button>
  
    </form>
    `,
  //===================================
  login: `

      <div class="container">
        <h2>Login</h2> <br>
        <form>
      <label>Nome:</label><br>
      <input type="text" required><br><br>
      <label>Email:</label><br>
      <input type="email" required><br><br>
      <label>Senha:</label><br>
      <input type="password" name="senha" required><br><br>
      <label>Confime sua senha:</label><br>
      <input type="password" name="senha" required><br><br>
      <button type="submit" class="button">Login</button>
    </form>
      </div>`

}

function Registrar(aba) {
  document.getElementById('conteudo').innerHTML = pagina[aba];

  document.querySelectorAll('li').forEach(li => {
    li.classList.remove('active');
  });

  document.getElementById(`aba-${aba}`).classList.add('active');
}
function entraADM() {
  const nome = document.getElementById("loginNome").value;
  const email = document.getElementById("loginEmail").value;
  const senha = document.getElementById("loginSenha").value;

  if (nome === "ADM" && email === "adm@gmail.com" && senha === "adm123") {
    localStorage.setItem("logado", "true");
    window.location.href = "main.html";
  } else {
    alert("Nome, e-mail ou senha incorretos.");
  }
}

Registrar('Registrar');

