/*
Fazer um programa que receba um conjunto de 10 valores 
inteiros, armazene em um array, verifique
se algum dos valores é igual a média dos mesmos.
Nome: Yuri Dinato da Silva
*/

const teclado = require(`prompt-sync`)();

let array: number[] = new Array(10);
let media: number = 0;

for (let x = 1; x <= 10; x++) {
    array[x] = parseInt(teclado(`Digite a nota ${x}: `));
    media += array[x];
}

media /= 10;

for (let i = 1; i <= 10; i++) {
    if (array[i] == media) {
        console.log(`O valor ${array[i]} localizado no espaço ${i}, é o mesmo da média das notas, a média dos valores é ${media}.`);
    }
}
