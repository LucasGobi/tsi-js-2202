//Como trabalhar com local storage

let btn = document.getElementById('botao');

btn.addEventListener('click', mostrar);

function mostrar(evento){
    evento.preventDefault();


    let entrada = document.getElementById('entrada').value;
    let mostrar = document.getElementById('mostrar').innerText = valor;
    let valor = entrada.value;
    mostrar.innerText = value;
    entrada.value = '';

    //apos obtermos o dado do usuario
    //vamos guarda-lo no local storage
    localStorage.setItem('dadoDoUsuario', valor);
}
//Para recuperar o dado de local storage
//usamos o localStorage.getItem()
document.querySelector('#mostrar').innerText = 
    localStorage.getItem('dadoDoUsuario');

//E para apagar no local Storage?
//removeItem()
//EXEMPLO: localStorage.removeItem('dadoDoUsuario');