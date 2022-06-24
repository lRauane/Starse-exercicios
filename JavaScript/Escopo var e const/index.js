/*
// ESCOPO DE VARIAVEIS E CONSTANTES
let x = 10; //var global

console.log(x);

function soma(a,b){
    console.log(x);
    let z = a + b; //z é uma var local
    return z;

}
let a = 50;
console.log(a);


console.log(soma(4,23));*/

function calcularKmMilha(){
    let km = document.querySelector('#valorKm').value;
    document.querySelector('#resultado').textContent = km * 1.609;
}
console.log(km);