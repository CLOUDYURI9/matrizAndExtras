/* Fazer uma programa que recebe como parâmetro 5 notas
de um aluno ao longo do ano, armazene em um array e
devolve a média do aluno.
Nome: Yuri Dinato da Silva
*/
var teclado = require("prompt-sync")();
var array = new Array(5);
var media = 0;
for (var x = 1; x <= 5; x++) {
    array[x] = parseFloat(teclado("Digite a nota ".concat(x, ": ")));
    media += array[x];
}
media /= 5;
console.log("A m\u00E9dia das cinco notas \u00E9: ".concat(media));
