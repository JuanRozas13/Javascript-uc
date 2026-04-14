/**
 * Exercicio de conversão de temperatura
 * @author Juan Rozas
 */

//importação do pacote prompt-sync para entrada de dados
const prompt = require('prompt-sync')()
const colors = require('colors')
// variaveis
let c, f

console.clear()
console.log('Conversão de temperatura de Fahrenheit para Celsius')

// entrada de dados
f = Number(prompt('Digite a temperatura em Fahrenheit: '))

// processamento
// c = (f - 32) * 5/9
c = (f - 32) / 1,8


// saída de dados
console.log(`${f}°F equivale a ${c.toFixed(1)}°C`) // toFixed(2) limita a 2 casas decimais
