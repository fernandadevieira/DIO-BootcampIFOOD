/* Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 
1 a 100. Faça um programa que receba os 5 números sorteados para os alunos
e mostre o maior número sorteado 

Dados de entrada:
5
50
10
98
23

Saída:
98 */

const entradas = [5, 50, 10, 98, 23];
let i = 0;

function gets() {
    const valor = entradas[i];
    i = i + 1;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };