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