const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulistaAmigos = document.getElementById("listaAmigos");
const ulresultado = document.getElementById("resultado");
function agregarAmigo() {
    listaAmigos.push(inputAmigo.value);
    //?ulistaAmigos.innerHTML = ulistaAmigos.innerHTML + inputAmigo.value;
    ulistaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }
    const amigoSecreto = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    alert(`El amigo secreto es: ${amigoSecreto}`);
    ulresultado.innerHTML = `<li>${amigoSecreto}</li>`;
}
