/**
 * Cálculo da média de 2 notas
 * Exemplo de uso da biblioteca prompt-sync 
 * @author Juan Rozas
 */

const prompt = require('prompt-sync')()

console.clear()

console.log('Cálculo da média de 2 notas')

// entrada de dados
let disciplina, nota1, nota2, media

disciplina = prompt('Digite o nome da disciplina: ')
// console.log(disciplina)
// console.log(typeof(disciplina))

// Number converte para o tipo numérico 
nota1 = Number(prompt('Digite a primeira nota: '))
// console.log(nota1)
// console.log(typeof(nota1))

nota2 = Number(prompt('Digite a segunda nota: '))
// console.log(nota2)
// console.log(typeof(nota2))

// Processamento
media = (nota1 + nota2) / 2

// saída de dados
console.log(`Média: ${media.toFixed(2)}`) // toFixed(2) limita a 2 casas decimais