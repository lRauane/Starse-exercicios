 // CONDICIONAIS

let nota1 = 1;
let nota2 = 3;

function media(n1, n2){
    return(n1 + n2)/2;
}

let resultado = media(nota1, nota2);
//console.log(resultado);

// if - se...
if(resultado === 0 || nota2 === 0){ //pelo menos 1 deve ser verdadeira
    console.log(`Desclassificado, pois pelo menos uma das notas é igual a 0`);
} else{
    console.log(`classificado, pois ambas as notas são iguais a 0`)
}
if(nota1 > 7 && nota2 > 7){ //ambas devem ser verdadeiras
    console.log('Voce teve um exelente desempenho')
} else{
    console.log('voce teve um desempenho razoavel ou satisfatorio')
}