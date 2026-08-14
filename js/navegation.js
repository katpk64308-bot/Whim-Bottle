window.navegar = navegar
window.sair = sair
const paginas = {
  //===================================
  home: `
    <h1>home</h1>
      <div class="imagem1">
                <img src="img/garrafa1.png" alt="Imagem da Whim Bottle">
            </div>
            <div class="painel-status">
    Nível de agua atual: 
    <br>
    <span id="statusPorcentagem">0%</span> /
    <span id="statsML">0ML</span>
  </div>

  <div class="simulador">
    <strong>Escolha a temperatura:</strong><br><br>
   
    <span class="opcao-conteudo"><img src="img/natura.png" alt="">
    <label><input type="radio" name="temperatura" value="normal" onchange="alterarTemp(this.value)"> Normal</label><br>
   
    <span class="opcao-conteudo"><img src="img/quent.png" alt="">
    <label><input type="radio" name="temperatura" value="quente" onchange="alterarTemp(this.value)"> Quente</label><br>
   
    <span class="opcao-conteudo"><img src="img/fri.png" alt="">
    <label><input type="radio" name="temperatura" value="frio" onchange="alterarTemp(this.value)"> Frio</label><br>
 </div>
   
    `,
  //===================================
  sobre: `
    <h1>Sobre</h1>
     <div class="text">
<p>A Whim Bottle foi desenvolvida para tornar o dia a dia mais prático
 e incentivar hábitos mais saudáveis, ajudando você a manter a hidratação em qualquer momento.</p>

<p>Além de armazenar sua bebida, a garrafa conta com um sistema que permite aquecer ou resfriar a água 
na temperatura desejada. Ela também possui um suporte integrado para celulares, é totalmente recarregável 
e ainda pode ser utilizada como carregador portátil para dispositivos móveis.</p>
        </div>
    `,
  //=================================
  contato: `
    <h1>Contato</h1>
    <div class="contato">
    <p  class="text">Email da empresa: <link>whimbottletec@gmail.com</link></p>
    <p>Telefone: (47) 9999-1628</p>
    </div>    
    `
};

function sair(aba) {
  if (aba === 'sair') {
    window.location.href = 'index.html';
  }
}

function navegar(aba) {
  document.getElementById('conteudo').innerHTML = paginas[aba];

  if (aba === 'home') {
    const temperaturaSalva = localStorage.getItem('temperaturaEscolhida');
    const opcaoTemperatura = document.querySelector(
      `input[name="temperatura"][value="${temperaturaSalva || 'normal'}"]`
    );

    if (opcaoTemperatura) {
      opcaoTemperatura.checked = true;
    }
  }

  document.querySelectorAll('header nav ul li').forEach(li => {
    li.classList.remove('active');
  });
  document.getElementById(`aba-${aba}`).classList.add('active');
}

navegar('home');
