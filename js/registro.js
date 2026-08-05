window.Registrar =Registrar
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
    Login: `
  
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
      </div>
      
    `,

};
function Registrar(aba) {
    document.getElementById('conteudo').innerHTML = pagina[aba];

   

    document.querySelectorAll('nav ul li').forEach(li => {
        li.classList.remove('active');
    });

    document.getElementById(`aba-${aba}`).classList.add('active');
}

navegar('Registrar');
