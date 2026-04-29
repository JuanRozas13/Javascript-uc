/**
 * Jogo do dado
 * Exemplo de uso da estrutura (do while)
 * @author Juan Rozas
 */

const prompt = require('prompt-sync')()
let jogador, pc, novoJogo

novoJogo = 'n'
do{
// Logica do jogador
    console.clear()
    console.log('Jogo do dado')
    jogador = prompt('Digite enter para lançar...')
    console.log(`Face do dado do jogador: ${Math.ceil(Math.random() * 6)}`)

    // Logica do pc
    pc = Math.ceil(Math.random()*6)
    console.log(`Face do dado do pc: ${pc}`)

    if (jogador === pc){
        console.log('Empate')
    } else if (()){
        console.log('Jogador ganhou')
    } else {
        console.log('Pc ganhou')
    }
    novoJogo = prompt('Deseja jogar novamente(s/n)')
}while (novoJogo === 's' || novoJogo === 'S')