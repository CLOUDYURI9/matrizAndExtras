/*
Fazer um programa que receba um conjunto de 10 valores
inteiros, armazene em um array, verifique
se algum dos valores é igual a média dos mesmos.
Nome: Yuri Dinato da Silva
*/
var teclado = require("prompt-sync")();
var array = new Array(10);
var media = 0;
for (var x = 1; x <= 10; x++) {
    array[x] = parseInt(teclado("Digite a nota ".concat(x, ": ")));
    media += array[x];
}
media /= 10;
for (var i = 1; i <= 10; i++) {
    if (array[i] == media) {
        console.log("O valor ".concat(array[i], " localizado no espa\u00E7o ").concat(i, ", \u00E9 o mesmo da m\u00E9dia das notas, a m\u00E9dia dos valores \u00E9 ").concat(media, "."));
    }
}
