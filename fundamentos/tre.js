/**
 * Validação da obrigatoriedade de votar
 * @author Juan Rozas
 */

const prompt = require('prompt-sync')()

//variável 
let idade 

//UX
console.clear()
console.log('Validação da obrigatoriedade de votar')

//entrada
idade = Number(prompt('Digite a sua idade: '))

//processamento e saída
if (idade < 16) {
    console.log('Você é proibido votar')
} else if (idade === 16 || idade === 17 || idade > 70) {
    console.log('Voto facultativo ')
    console.log('Você pode votar, mas não é obrigatório')
} else {
    console.log('Voto obrigatorio')
}
