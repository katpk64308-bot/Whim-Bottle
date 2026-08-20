window.navegar = navegar;
window.sair = sair;

const paginas = {
    home: `
        <h1>home</h1>

        <div class="imagem1">
            <img src="img/garrafa1.png" alt="Imagem da Whim Bottle">
        </div>

        <div class="painel-status">
            Nível de agua atual:<br>
            <span id="statusPorcentagem">0%</span> /
            <span id="statsML">0ML</span>

            <div class="temp-atual">
                <p>Temperatura</p>
                <span class="opcao-conteudo">
                    <img src="img/imgtemp1.png" id="imagemTemperatura" width="50">
                </span>
                <span class="statsTemp" id="temp">0°C</span>
            </div>
        </div>

        <div class="simulador">
            <div class="escolha-temperatura">
                <strong>Escolha a temperatura:</strong>

                <label class="temperaturaopcao normal">
                    <input type="radio" name="temperatura" id="2" value="normal" onchange="alterarTemp(this.value)">
                    <img src="img/natural.png" alt="">
                    Normal
                </label>

                <label class="temperaturaopcao quente">
                    <input type="radio" name="temperatura" id="3" value="quente" onchange="alterarTemp(this.value)">
                    <img src="img/quente.png" alt="">
                    Quente
                </label>

                <label class="temperaturaopcao frio">
                    <input type="radio" name="temperatura" id="1" value="frio" onchange="alterarTemp(this.value)">
                    <img src="img/frio.png" alt="">
                    Fria
                </label>
            </div>
        </div>
    `,

    sobre: `
        <h1>Sobre</h1>
        <div class="text">
            <p>A Whim Bottle foi desenvolvida para tornar o dia a dia mais prático e incentivar hábitos mais saudáveis, ajudando você a manter a hidratação em qualquer momento.</p>
            <p>Além de armazenar sua bebida, a garrafa conta com um sistema que permite aquecer ou resfriar a água na temperatura desejada. Ela também possui um suporte integrado para celulares, é totalmente recarregável e ainda pode ser utilizada como carregador portátil para dispositivos móveis.</p>
        </div>
    `,

    contato: `
        <h1>Contato</h1>
        <div class="contato">
            <p class="text">Email da empresa: whimbottletec@gmail.com</p>
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


    document.querySelectorAll('header nav ul li').forEach((li) => {
        li.classList.remove('active');
    });

    document.getElementById(`aba-${aba}`).classList.add('active');
}

navegar('home');
