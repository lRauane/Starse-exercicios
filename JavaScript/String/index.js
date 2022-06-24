// Tipo de dado primitivo
//STRING - CADEIA DE CARACTERES
let nome = 'juvana';

let idade = 20;

let cidade = 'Itacare';

let animal = 'Gato';

let conc = nome +', '+ idade + 'Anos ' + cidade + ', ' + animal;

conc = `${nome}, ${idade} anos, ${cidade}, ${animal}`;

console.log(nome.length)
console.log(nome.toUpperCase())
console.log(nome.toLowerCase())

let localização = 'Curitiba - PR';
console.log(localização.length);
let estado = localização.substring(localização.length-2);

console.log(estado) 

