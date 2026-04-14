/**
 * Desenvolva um programa que calcule o tempo necessário para uma viagem. 
 * O usuário deve fornecer a distância a ser percorrida e a velocidade média do veículo. 
 * O programa deve calcular e exibir o tempo de viagem.
 * @author Juan Rozas
*/
// importação do pacote prompt-sync para entrada de dados
const prompt = require('prompt-sync')()

console.clear()
console.log('Esse app ele calcula o tempo necessário para uma viagem. O usuário deve fornecer a distância a ser percorrida e a velocidade média do veículo. O programa deve calcular e exibir o tempo de viagem.')
console.log(' ')
console.log('--------------------------------------------------')
console.log(' ')
console.log('Cálculo do tempo de viagem')

// entrada de dados
let distanciaKm, velocidademediaKm, tempoHoras
distanciaKm = Number(prompt('Digite a distancia a ser percorrida (em km): '))
console.log(' ')
velocidademediaKm = Number(prompt('Digite a velocidade média do veículo (em km/h): '))

// processamento
tempoHoras = distanciaKm / velocidademediaKm

// saída de dados
console.log(' ')
console.log(`O tempo necessário para a viagem é de ${tempoHoras.toFixed(2)} horas.`) // toFixed(2) limita a 2 casas decimais