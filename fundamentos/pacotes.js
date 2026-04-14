/**
 * Estudos dos pacotes npm no JavaScript
 * @author Juan Rozas
 */

// A linha abaixo importa o pacote 
// Observação: O pacote precisa estar instalado 
const color = require('colors')

console.clear()
console.log('Hellow world'.italic.blue.bgBlack)
console.log('Juan Rozas oaksjdlkjasd'.italic.red.bgBrightWhite.trap)

const prompt = require('prompt-sync')()

const nome = prompt('Digite seu nome: ')
console.log(`Olá ${nome}, seja bem-vindo!`.green)