/* Faça um algoritmo que dado as 3 notas tiradas por um aluno
em um semestre da faculdade, calcule e imprima a sua média e 
a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
Reprovado: média menor que 5;
Recuperação: média entre 5 e 7;
Aprovado: média maior que 7. */

const nota1 = 7;
const nota2 = 7;
const nota3 = 8;
const media = (nota1 + nota2 + nota3) / 3;

console.log(media);

if (media < 5) {
    console.log('Reprovado');
} else if (media >= 5 && media <= 7) {
    console.log('Recuperação');
} else {
    console.log('Aprovado');
}