/**
 * Estudo da estrurura de controle if e else
 * @author Juan Rozas
 */

// Importação de pacotes
const color = require('colors')
const prompt = require('prompt-sync')()

// Variaáveis
let nota1, nota2, media

console.clear()
console.log('Calculo da média')

// Entrada de dados
nota1 = Number(prompt('Digite a primeira nota: '))
nota2 = Number(prompt('Digite a segunda nota: '))

// Processamento
media = (nota1 + nota2) / 2

// Saída de dados
console.log(' ')

if (media < 5){
    console.log(`Sua média é ${media.toFixed(2)}, você está reprovado`.red)
} else {
    console.log(`Sua média é ${media.toFixed(2)}, você está aprovado`.green)
}