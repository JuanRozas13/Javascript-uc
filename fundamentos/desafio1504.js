/**
 * Gasolina ou alcool?
 * @author Juan Rozas
 */

// Importação de pacotes
const prompt = require('prompt-sync')()
const color = require('colors')

// Variaveis
let gasolina, alcool
console.clear()
console.log('Esse app ele calcula qual combustível é mais vantajoso para abastecer seu carro, gasolina ou álcool'.italic)
console.log(' ')

// Entrada de dados
gasolina = Number(prompt('Digite o preço da gasolina: R$ '))
alcool = Number(prompt('Digite o preço do álcool: R$ '))

// Processamento --> saida de dados
console.log(' ')

if (alcool < 0.7 * gasolina) {
    console.log('Abasteça com álcool, é mais vantajoso')
} else {
    console.log('Abasteça com gasolina, é mais vantajoso')
}