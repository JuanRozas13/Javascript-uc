/**
 * Calculador Js - Exemplo de uso de funções
 * @author Juan Rozas
 */
 
// importação de pacote
const prompt = require('prompt-sync')()
 
//variáveis globais
let num1, num2, opcao, resultado
 
//Funções das operações (com parâmetros)
function somar(num1, num2) {
    return num1 + num2
}
function subtrair(num1, num2) {
    return num1 - num2
}
function multiplicar(num1, num2) {
    return num1 * num2
}
function dividir(num1, num2) {
    //valiodação
    if (num1 === 0) {
        console.log("Erro! Impossível dividir por 0")
    } else {
        return num1 / num2
    }
}
function raizQuadrada(num1) {
    return Math.sqrt(num1)
}
function porcentagem(valor, porcento) {
    return (valor * porcento) / 100
}
 
 
//=====================================================================
// Função princial (main)
function iniciarCalculadora() {
    ;//gerando um loop infinito
    do {
        mostrarMenu()
        //escolha da opção
        opcao = Number(prompt("Escolha uma opção: "))
        switch (opcao) {
            case 0:
                console.log("Calculadora encerrada.")
                return //encerra o loop infinito
            case 1:
                num1 = Number(prompt("Digite o primeiro número: "))
                num2 = Number(prompt("Digite o segundo número: "))
                resultado = somar(num1, num2)
                break
            case 2:
                num1 = Number(prompt("Digite o primeiro número: "))
                num2 = Number(prompt("Digite o segundo número: "))
                resultado = subtrair(num1, num2)
                break
            case 3:
                num1 = Number(prompt("Digite o primeiro número: "))
                num2 = Number(prompt("Digite o segundo número: "))
                resultado = multiplicar(num1, num2)
                break
            case 4:
                num1 = Number(prompt("Digite o primeiro número: "))
                num2 = Number(prompt("Digite o segundo número: "))
                resultado = dividir(num1, num2)
                break
            case 5:
                num1 = Number(prompt("Digite o Valor: "))
                resultado = raizQuadrada(num1)
                break
            case 6:
                num1 = Number(prompt("Digite o valor: "))
                num2 = Number(prompt("Digite a porcentagem (%): "))
                resultado = porcentagem(num1, num2)
                break
            default:
                console.log("Opção invalida")
                prompt("Precione [Enter] para continuar")
                continue//continue dentro do switch case
        }
        //exibir o resultado
        console.log(`Resultado: ${resultado.toFixed(2)}`)
        prompt("Precione o [Enter] para continuar")
    } while (true)
}
 
 
 
 
//Função menu
function mostrarMenu() {
    console.clear()
    console.log("=== Calculadora JS ===")
    console.log("1.Somar")
    console.log("2.Subtrair")
    console.log("3.Multiplicar")
    console.log("4.Dividir")
    console.log("5.Raiz quadrada")
    console.log("6.Porcentagem")
    console.log("0.Sair")
}
//Executar a função principal
iniciarCalculadora()
 