let amigosNaLista = [];


function adicionar(){
let nomeAmigo = document.getElementById('nome-amigo');
console.log (nomeAmigo.value)
if (nomeAmigo.value.trim() == ''){
    alert("informe um nome!");
    return;
    }
    
let listaAmigos = document.getElementById('lista-amigos');
console.log(amigosNaLista)
if (amigosNaLista.includes(nomeAmigo.value.trim())){
    alert ('nome já adicionado');
    return;
}
amigosNaLista.push(nomeAmigo.value.trim());
if (listaAmigos.textContent == ''){
    listaAmigos.textContent = nomeAmigo.value;
    } else {
    listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeAmigo.value;
}

nomeAmigo.value = ' ';
}

function sortear(){
    if(amigosNaLista.length <= 4){
        alert ("Adicione mais participantes")
        return
    }
embaralhar(amigosNaLista)
let listaSorteio = document.getElementById('lista-sorteio')
for (let i = 0; i < amigosNaLista.length; i++){
    if (i == amigosNaLista.length - 1){
        listaSorteio.innerHTML = listaSorteio.innerHTML + amigosNaLista[i] + '-->' + amigosNaLista [0] + '<br>'

    }else{
        listaSorteio.innerHTML = listaSorteio.innerHTML + amigosNaLista[i] + '-->' + amigosNaLista [i + 1] + '<br>'
    }
    
} 

}
function reiniciar(){
    amigosNaLista = [ ]
    listaAmigos = document.getElementById('lista-amigos').innerHTML = ' '
    listaSorteio = document.getElementById('lista-sorteio').innerHTML = ' '

alert ('Jogo reiniciado!')
}


function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}




