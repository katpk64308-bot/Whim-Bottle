
const paginas = {
    //==================================
    home: `
    <h1>home</h1>
      <div class="imagem1">
                <img src="img/garrafa1.png" alt="Imagem da Whim Bottle">
            </div>
    `,
    //==================================
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
    //==================================
    contato: `
    <h1>Contato</h1>
    `
};
function navegar(aba) {
    document.getElementById('conteudo').innerHTML = paginas[aba];

    document.querySelectorAll('header nav ul li').forEach(li => {
        li.classList.remove('active');
    });

    document.getElementById(`aba-${aba}`).classList.add('active');
}

navegar('home');