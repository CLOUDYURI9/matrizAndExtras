/* Fazer uma programa que recebe como parâmetro 5 notas
de um aluno ao longo do ano, armazene em um array e 
devolve a média do aluno. 
Nome: Yuri Dinato da Silva
*/

let array: number [] = new Array(5);
let media: number = 0;
for(let x = 1; x <= 5; x++){
    array[x] = parseFloat(teclado(`Digite a nota ${x}: `));
    media += array[x];
}

media /= 5;
console.log(`A média das cinco notas é: ${media}`);
