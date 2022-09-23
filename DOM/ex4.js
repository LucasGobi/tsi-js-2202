let e;

e = document.getElementsByClassName('collection-item');

let vetor = Array.from(e);

vetor.forEach(function(val){

val.style.color =  'green';

    console.log(val.innerText);
});

e = document.querySelectorAll('li');

console.log(e[2]);

e.forEach(function(val){

    console.log(val.innerText);
});


e = document.querySelectorAll('li:nth-child(odd)');

e.forEach(function(val){

    val.style.background = '#dedede';

});

//sem usar função anonima

e.forEach(fazAlgumaCoia);

function fazAlgumaCoia(val){

    console.log(val);
}