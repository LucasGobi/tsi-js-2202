
//FOR

for(let i = 0; i < 10; i++){
    console.log('Numero da linha ' + i);
}



//WHILE

let i = 0
while( i < 10) {
   
    console.log('Numero da linha com while ' + i);
    i++;
}


//DO

i = 0;

do{
    console.log('Numero da linha com do ' + i);
    i++
}while( i < 10);

/////////////////////////////////

//Condicionais

//IF 

let a = 7;
let b = 5;
if( a < b){
    console.log( a + ' é menor que ' + b);

}else{
    console.log( a + ' nã é menor que '+ b);
}


let diaSemana = 3

switch(diaSemana){
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Segunda');
        break;
    case 2:
        console.log('Terça');
        break;
    case 3:
        console.log('Quarta');
        break;
    case 4:
        console.log('Quinta');
        break;
    case 5:
        console.log('Sexta');
        break;
    case 6:
        console.log('Sabado');
        break;
    default:
        console.log('Não é dia da semana')
}

//Ternário

let x = 4;
let y = 2;

let resultado = x > y ? x + ' é maior' : 'não é maior';

console.log(resultado);

let genero = prompt('Entre com M ou F');

let saida = genero =="M" ? 'Masculino' : 'Feminino';

console.log(saida)

//Coalescente
let coisa;
let variavel = coisa ?? 'Não há';
console.log(variavel);













