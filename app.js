// declara variaveis
let listaAmigos = [];
let botaoReiniciar = document.getElementById('reiniciar');
let botaoSortear = document.getElementById('sortear');
let input = document.getElementById('amigo');

// adiciona nomes de amigos ao listaAmigos + exibir lista na tela
function adicionarAmigo() {
    let nomeDoAmigo = document.querySelector('input').value;
    if (nomeDoAmigo == '') {
        alert('Por favor, insira um nome.');
        return false;
    } else {
        limparLista();
        listaAmigos.push(nomeDoAmigo); 
        let listaExibida = document.getElementById('listaAmigos');
        for (i = 0; i < listaAmigos.length; ++i) {
            let li = document.createElement('li');
            li.innerText = listaAmigos[i];
            listaExibida.appendChild(li);
        }
    limparCampo();
    }
}

// sortea um dos amigos da listaAmigos
function sortearAmigo() {
    if (listaAmigos == '') {
        alert('Por favor, insira um nome.');
    } else {
        let amigoSecreto = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
        listaAmigos = listaAmigos.filter(item => item !== amigoSecreto);
        resultado.innerHTML = `Seu amigo secreto é: ${amigoSecreto}`;
        botaoReiniciar.removeAttribute('hidden');
        botaoSortear.setAttribute('hidden', 'hidden');
    }
    limparLista();  
}

// limpa campo do input apos adicionar nome do amigo
function limparCampo() {
    nomeDoAmigo = document.querySelector('input');
    nomeDoAmigo.value = '';
}
// limpa lista abaixo do campo input, para que nao haja duplicacao de listas
function limparLista() {
    lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
}