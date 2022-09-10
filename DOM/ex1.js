console.log( window);
// Como utilizar atributos de um objeto 
// alert(`Sua resolução é: ${window.innerHeight} x ${window.innerWidth}`);


let meuTitulo = document.getElementById('titulo');

meuTitulo.innerText = 'Mudou!';

console.log(meuTitulo);


if(confirm('Deixe uma mensagem')){

    let  msg = prompt('Mensagem');
    meuTitulo.innerText = msg;
    meuTitulo.style.background = 'green';

}else{

    meuTitulo.innerText = 'Sem mensagem';
    meuTitulo.style.background = '#dedede';
}