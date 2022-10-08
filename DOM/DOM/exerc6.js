
//Como atualizar um element com JS

//Criamos um novo elemento 
const novoTitulo = document.createElement('h2');
//Colocamos a características que desejamos
novoTitulo.id = 'task-title';
novoTitulo.appendChild(document.createTextNode('Nova Lista'));

//Capturamos o elemento HS atual(que está originalmente)
const tituloAtual = document.getElementById('task-title');

//Capturamos o elemento mãe/paido elemento que queremos atualizar

let divMaeDoTitulo = 
        document.getElementsByClassName('card-action');

console.log(divMaeDoTitulo);

divMaeDoTitulo.replaceChild(novoTitulo, tituloAtual);
