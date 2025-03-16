const amigos = [];

function agregarAmigo() {
  const valorEntrada = document.getElementById('amigo');
  const nombreAmigo = valorEntrada.value.trim();

  if (nombreAmigo === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(nombreAmigo);
  valorEntrada.value = "";
  actualizarListaAmigos();
}

function actualizarListaAmigos() {
  const listaElement = document.getElementById('listaAmigos');
  listaElement.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    listaElement.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  const resultadoElement = document.getElementById('resultado');
  const listaElement = document.getElementById('listaAmigos');
  listaElement.innerHTML = "";
  resultadoElement.innerHTML = `<li>El amigo secreto sorteado es: ${amigoSorteado}</li>`;
}

