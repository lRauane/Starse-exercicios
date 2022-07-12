// TIPOS DE DADOS DE REFERENCIA
// ARRAY - ARRANJO - VETOR

/* let produtos = ['Camisa', 'Calça', 'Blusa', 'tenis']; //vazio

console.log(produtos)

let jogadores = [
    {
        nome: 'Beto', 
        posiçao: 'Atacante'
    },
    {
        nome: 'Gil',
        posiçao: 'Zagueiro'
    },
];
console.log(jogadores); */

/*
//SPLIT - DIIVIDIR
const email = 'fulano@meuemail.com';
let emailArray = email.split('@');
console.log(emailArray);


const palavrasChave = 'cinema, futebol, televisão, viagem, boliche';
const hobbies = palavrasChave.split(',');

console.log(hobbies[hobbies.length-1]);

const tiposHobbies = hobbies.join('|')
console.log( tiposHobbies) */
/*
const cidades = [];
// PUSH - ADCICIONAR NO FINAL
 cidades.push('Rio', 'São Paulo')
 console.log(cidades)

 cidades.push('cuiaba', 'brasilia')
 console.log(cidades);

 // UNSHIFT - ADD NO COMEÇO
 cidades.unshift('Campinas', 'florianolos')
 console.log(cidades);

 // POP - REMOVER O ULTIMO ELEMENTO -RETORNA ELEMENTO REMOVIDO 

 let cidadeRemovida =cidades.pop();
 console.log(cidadeRemovida)
 console.log(cidades)

 // SHIFT REMOVE O PRIMEIRO ELEMENTO -RETORNA ELEMENTO REMOVIDO
 cidadeRemovida = cidades.shift();
 console.log(cidadeRemovida);
 console.log(cidades);

 // SPLICE - REMOVE 1 OU MAIS INTES - UTILIZANDO UM INDICE

 const indice = cidades.indexOf('Rio');
 console.log(indice)

 cidades.splice(indice);
 console.log(cidades); */
 /*
 // CONCAT - CONCATENIZAÇAO DE ARRAYS
 const cidadesInterior = ['Araraquara', 'Araras', 'Limeira'];
console.log(cidadesInterior);

 const regioesMetropolitanas = ['Campinas', 'São Paulo'];
console.log(regioesMetropolitanas)
 const cidadesInteriorEMetrpolitanas = cidadesInterior.concat(regioesMetropolitanas);

 console.log(cidadesInteriorEMetrpolitanas);

 console.log(cidadesInteriorEMetrpolitanas.indexOf('São Paulo')); */

 /*
 // ARRAY.from
 const x = Array.from('ABNT');
 console.log(x);

 // INCLUIDES
 const cidades = ['rio', 'Foz', 'Limeira'];
 console.log(cidades.includes('Foz')) */

 // ITERAR OU PECORRER
 const jogadores = [
    {
       nome : 'Beto',
       posiçao :'Atacante'
    }, 
    {
        nome : 'Gil', 
        posiçao : 'Zagueiro'
    },
    {
        nome : 'Milton', 
        posiçao : 'volante'
    },
    {
        nome : 'Nuno', 
        posiçao : 'volante'
    },
];

function obterNome(j){
    return j.nome;
}
function obterPosiçao(j){
    return j.posiçao;
}

let nomesJogadores = jogadores.map(obterNome);

console.log(nomesJogadores);

let posiçoesJogadores = jogadores.map(obterPosiçao)
console.log(posiçoesJogadores);

function obtemVolante(jogador){
    return jogador.posiçao === 'volante';
}
const volante = jogadores.filter(obtemVolante);
console.log(volante);

/*
let notas = [7, 9, 3, 2, 4, 9];
function adicionarUmponto(nota){
    return nota +1.7;
}

let notasAtualizada = notas.map(adicionarUmponto);
console.log(notasAtualizada);*/

//FILTER

