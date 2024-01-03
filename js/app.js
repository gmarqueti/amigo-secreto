let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo');

    if (amigo.value == ''){
        alert('Digite um nome para adicionar!');
        return;
    } else if (amigos.includes(amigo.value)){
        alert('Este nome já foi adicionado!');
        return;
    }

    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo.value);

    if (lista.textContent == ''){
    lista.textContent = amigo.value;
    } else {
    lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
}

function sortear(){
    if (amigos.length < 4){
        alert('Adicione pelo menos 4 amigos!');
        return;
    }
    embaralha(amigos);

    for (let i = 0; i < amigos.length; i++){
        let sorteio = document.getElementById('lista-sorteio');

        if (i == amigos.length -1 ){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0];
        } else  {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }

}

function embaralha (lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}