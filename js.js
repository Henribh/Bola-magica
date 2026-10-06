let pergunta = prompt("Faça sua pergunta")


const palavras = ["Com certeza", "Não conte com isso", "O futuro é incerto", "Minhas fontes dizem que não", "Pelo que vejo, sim."]

function sortear() {
    const indiceAleatorio = Math.floor(Math.random() * palavras.length);
    const palavraSorteada = palavras[indiceAleatorio];

    document.getElementById("resultado").innerText = palavraSorteada;
}

function criarParticula() {
    const particula = document.createElement('div');
    particula.classList.add('particula');

    particula.style.left = Math.random() * 100 + 'vw';

    const duracao = Math.random() * 3 + 3;
    particula.style.animationDuration = duracao + 's';

    
    const tamanho = Math.random() * 3 + 2;
    particula.style.width = tamanho + 'px';
    particula.style.height = tamanho + 'px';

    document.body.appendChild(particula);

    setTimeout(() => {
        particula.remove();
    }, duracao * 1000); 
}
setInterval(criarParticula, 300);