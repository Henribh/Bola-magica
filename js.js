let pergunta = prompt("Faça sua pergunta")


const palavras = ["Com certeza", "Não conte com isso", "O futuro é incerto"]

function sortear() {
    const indiceAleatorio = Math.floor(Math.random() * palavras.length);
    const palavraSorteada = palavras[indiceAleatorio];

    document.getElementById("resultado").innerText = palavraSorteada;
}