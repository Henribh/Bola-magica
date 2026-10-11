function gerarEstrelas() {
    const container = document.getElementById('stars-container');
    const quantidadeEstrelas = 120;

    for (let i = 0; i < quantidadeEstrelas; i++) {
        const estrela = document.createElement('div');
        estrela.classList.add('star');

        estrela.style.left = `${Math.random() * 100}vw`;
        estrela.style.top = `${Math.random() * 100}vh`;

        const tamanho = Math.random() * 2;
        estrela.style.width = `${tamanho}px`;
        estrela.style.height = `${tamanho}px`;

        estrela.style.animationDuration = `${Math.random() * 4 + 3}s`;
        estrela.style.animationDelay = `${Math.random() * 5}s`;

        container.appendChild(estrela);
    }
}

function invocarCometaLento() {
    const container = document.getElementById('comets-container');
    const cometa = document.createElement('div');
    cometa.classList.add('cometa');

    const posInicialX = (Math.random() * 150) + 'vw';
    cometa.style.left = posInicialX;
    cometa.style.top = '-10vh';

    const duracaoQueda = Math.random() * 7 + 8;
    cometa.style.animation = `quedaCometa ${duracaoQueda}s ease-in-out forwards`;

    container.appendChild(cometa);

    setTimeout(() => {
        cometa.remove();
    }, duracaoQueda * 1000);

    const proximoCometa = Math.random() * 9000 + 6000;
    setTimeout(invocarCometaLento, proximoCometa);
}

window.onload = () => {
    gerarEstrelas();

    setTimeout(invocarCometaLento, 3000);
};


const palavras = [
    "Com certeza",
    "Não conte com isso",
    "O futuro é incerto",
    "Minhas fontes dizem que não",
    "Pelo que vejo, sim.",
    "O caminho está nebuloso, pergunte novamente.",
    "As energias indicam que sim."
];

function sortear() {
    const inputPergunta = document.getElementById("perguntaInput");
    const resultado = document.getElementById("resultado");
    const containerBola = document.getElementById("containerBola");
    const botao = document.getElementById("btnSortear");

    if (inputPergunta.value.trim() === "") {
        resultado.innerText = "Concentre-se e digite uma pergunta.";
        resultado.style.color = "#ff8c8c";
        return;
    }

    botao.disabled = true;
    resultado.style.color = "rgba(240, 248, 255, 0.5)";
    resultado.innerText = "Sintonizando com o universo...";

    containerBola.classList.add("consultando");

    setTimeout(() => {
        containerBola.classList.remove("consultando");

        const indiceAleatorio = Math.floor(Math.random() * palavras.length);
        const palavraSorteada = palavras[indiceAleatorio];

        resultado.style.color = "#bfaaff";
        resultado.innerText = palavraSorteada;

        inputPergunta.value = "";
        botao.disabled = false;

    }, 4000);
}