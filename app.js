// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let inputAmigo = document.getElementById("amigo");
let ulListaAmigos = document.getElementById("listaAmigos");
let ulResultado = document.getElementById("resultado");


function agregarAmigo() {
  if (inputAmigo.value === "") {
    alert("Por favor, ingresa un nombre")
    return;
  }
  if (listaAmigos.includes(inputAmigo.value)) {
    alert("Este amigo ya fue agregado")
    return;
    
  }
  if (listaAmigos.length >= 8) {
    alert("Se acabaron los cupos")
    return;
    
  }

  listaAmigos.push(inputAmigo.value);
  ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
  inputAmigo.value = "";
}
function actualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  listaAmigos.forEach((amigo) => {
    lista.innerHTML += `<li>${amigo}</li>`;
  });
  ulResultado.innerHTML = "";

}

function sortearAmigo() {
  let  random = Math.floor(Math.random() * listaAmigos.length);
  let amigoSecreto = listaAmigos[random];
  ulResultado.innerHTML = `<li>El amigo secreto es:${amigoSecreto}</li>`;
}
 