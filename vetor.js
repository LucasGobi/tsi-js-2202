//vetor

let amigos = [ 'Bono', 'Paulo', 'Lucas', 'Matehus', 'Joao'];

console.log(amigos.length);

//Looping com o vetor

for(let i = 0; i < amigos.length; i++){
    console.log(`Linha: ${i}`);
}

//Foreach For = para each = cada

amigos.forEach(function(valor, indice){
    console.log(`${indice}: ${valor}`);
})

//Map

amigos.map(function(valor, indice){
    console.log(`${indice}: ${valor}`);
})

    