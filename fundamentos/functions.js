/**
 * Estudos das funções
 * @author Juan Rozas
 */

// Função literal simples >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function hello(){
    console.clear()
    console.log('Hello word')
    console.log('tipo: ' + typeof hello) //apop ao entendimento da lógica
}

// Para executar uma função basta  "chamar" o nome da fução, não 
// esquecendo dos parênteses

hello()


// Função anônima >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const hello2 = function (){
    console.log('Hello function assigned')
    console.log('tipo: ' + typeof hello2)
}

hello2()

// Função anônima simplificada >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const hello3 = () =>{
     console.log('Hello arrow function assigned')
    console.log('tipo: ' + typeof hello3)
}

hello3()

// Função simples com parâmetros >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function somar(num1,num2) {
    return (console.log(num1 + num2))
}

// Neste caso dentro de parênteses, fornecemos os números que serão somados na função
somar(2,3)

// Função simples com parâmetros >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const somarA = function (num1,num2){
    console.log('tipo: ' + typeof somarA

    ) //apop ao entendimento da lógica
    return (console.log(num1 + num2))
}

somarA(6,9)

// Função anônima simplificada com parâmetro >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const somarAF = (num1,num2) =>{
     console.log('Hello arrow function assigned')
    console.log('tipo: ' + typeof somarAF)
    return (console.log(num1 + num2))
}

somarAF(8,8)

// Função anônima super simplificada com parâmetro >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// CUIDADO! neste caso o retorno é implicito
const somarAFS = (num1,num2) => (console.log(num1+num2))
somarAFS(5,3)

