window.Registrar =Registrar
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
      </div>`,

  Registrar: `
       <div class="container">
  <h2>Cadastro</h2>
  <br>
  <form>
    <label for="nome">Nome:</label><br>
    <input type="text" id="nome" name="nome" required><br><br>

    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email" required><br><br>

    <label for="senha">Senha:</label><br>
    <input type="password" id="senha" name="senha" required><br><br>

    <label for="confirmar_senha">Confirme sua senha:</label><br>
    <input type="password" id="confirmar_senha" name="confirmar_senha" required><br><br>

    <button type="submit" class="button">Cadastrar</button>
    <br><br><br>
     <li onclick="Registrar('login')" id="aba-login" class="active">Login</li>
  </form>
</div>

    `,
  //===================================

  login: `
  <div class="container">
  <h2>Login</h2> <br>
  <form>
    <label for="nome">Nome:</label><br>
    <input type="text" id="loginNome" required><br><br>

    <label for="email">Email:</label><br>
    <input type="email" id="loginEmail" required><br><br>

    <label for="senha">Senha:</label><br>
    <input type="password" id="loginSenha" name="senha" required><br><br>

    <button  onclick="entraADM()" type="button" class="button">Login</button>
    <br><br><br>
    <li onclick="Registrar('Registrar')" id="aba-Registrar">Cadastrar</li>
  </form>
</div>

      
    `,

};
function Registrar(ab) {
    document.getElementById('conteudo').innerHTML = pagina[ab];

   

    document.querySelectorAll('nav ul li').forEach(li => {
        li.classList.remove('active');
    });

    document.getElementById(`ab-${ab}`).classList.add('active');
}

navegar('Registrar');

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

