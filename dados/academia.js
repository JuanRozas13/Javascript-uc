/**
 * Sistema para gestão de academia
 * Estudo de array com estrutura de dados
 * @author Juan Rozas
 */

// Importação de pacotes
const prompt = require('prompt-sync')()
require('colors')

// Variaveis globais
let nome, idade, peso, altura, vip, busca


// contador de matricula
let matricula = 1
let opcaoMenu, opcaoConsulta, opcaoRelatorio

// Array principal (estrutura de dados)
let alunos = []

/*
Estrutura de dados:
[0] matricula
[1] nome
[2] idade
[3] peso
[4] altura
[5] vip
*/


// Main                >>>>>>>>>>>>>>>>>>>>
function mainAcademia() {
    // Menu principal
    do {
        console.clear()

        console.log(" _____           _           _           __ _____")
        console.log("|  _  |___ ___ _| |___ _____|_|___    __|  |   __|")
        console.log("|     |  _| .'| . | -_|     | | .'|  |  |  |__   |")
        console.log("|__|__|___|__,|___|___|_|_|_|_|__,|  |_____|_____|")
        console.log("")
        console.log("1. Cadastrar aluno")
        console.log("2. Consultar alunos")
        console.log("3. Alterar aluno")
        console.log("4. Excluir aluno")
        console.log("5. Ficha do aluno")
        console.log("6. Relatórios")
        console.log("0. Sair")
        console.log("")

        opcaoMenu = Number(prompt('Escolha: '))

        switch (opcaoMenu) {
            case 1:
                cadastrarAluno()
                break;

            case 2:
                consultarAlunos()
                break;

            case 3:
                editarAluno()
                break;

            case 4:
                excluirAluno()
                break;

            case 5:
                gerarFichaAluno()
                break;

            case 6:
                gerarRelatorios()
                break;

            case 0:
                console.log('Encerrando o sistema...')
                break;

            default:
                console.log('Opção invalida')
                prompt('Enter')
                break;
        }

    } while (opcaoMenu !== 0)
}
// Main (end)          <<<<<<<<<<<<<<<<<<<<

// CRUD - create       >>>>>>>>>>>>>>>>>>>>
function cadastrarAluno() {
    console.clear()
    console.log('=====CADASTRO DE ALUNO======')
    console.log('')

    // Loógica principal

    // Captura dos dados
    nome = prompt('Nome: ')
    idade = Number(prompt('Idade: '))
    peso = Number(prompt('Peso: '))
    altura = Number(prompt('Altura: '))
    vip = prompt('Aluno vip sim ou não? ')

    if (vip === 's') {
        vip = true
    } else {
        vip = false
    }

    // Adicionar os dados da matriz
    alunos.push([
        matricula,
        nome,
        idade,
        peso,
        altura,
        vip
    ])

    matricula++ // Alto incremento da matricula

    console.log('Aluno(a) Cadastrado com sucesso!')
    console.log('')

    prompt('ENTER...')
}
// CRUD - create fim   <<<<<<<<<<<<<<<<<<<<


// CRUD - read         >>>>>>>>>>>>>>>>>>>>
function consultarAlunos() {
    //Sub Menu    
    do {
        console.clear()
        console.log('=====CONSULTA DE ALUNO======')
        console.log('')
        console.log('1. Buscar aluno')
        console.log('2. Listar alunos')
        console.log('0. Voltar')
        console.log('')

        opcaoConsulta = Number(prompt('Escolha: '))



        switch (opcaoConsulta) {
            case 1:
                buscarAluno() //criando uma function para buscar um aluno 
                break;

            case 2:
                listarAlunos() //criando uma function para listar os alunos na lista
                break;

            case 0:
                break;

            default:
                console.log('')
                console.log('Opção invalida')
                prompt('Enter')
        }

    } while (opcaoConsulta !== 0)



    //Buscar aluno
    function buscarAluno() {
        console.clear()
        console.log('=====BUSCAR ALUNO=====')
        console.log('')

        // Logica princial (Busca pelo nome)
        // .toLocaleLowerCase - Usado para converter tudo em letras minúsculas
        busca = prompt('Digite o nome do aluno: ').toLowerCase()


        // Pesquisa(Filtro) na estrutura de dados 
        let encontrados = alunos.filter((a) => {
            return a[1].toLowerCase().includes(busca)
        })

        // Validação
        if (encontrados.length === 0) {
            console.log('')
            console.log('Aluno não encontrado')
        } else {

            let alunoEncontrado = encontrados
                .map((a) => {
                    return {
                        Matrícula: a[0],
                        Nome: a[1],
                        Idade: a[2],
                        Peso: a[3],
                        Altura: a[4],
                        Vip: a[5]
                    }
                })

            console.table(alunoEncontrado)
        }

        console.log('')
        prompt('Enter...')
    }

    //Listar aluno
    function listarAlunos() {
        console.clear()
        console.log('=====LISTA DE ALUNOS=====')
        console.log('')

        // Validação
        if (alunos.length === 0) {
            console.log('Nenhum aluno cadastrado')
        } else {
            // console.table(alunos)
            // Ordenar os nomes (Criar copia do vetor)
            let alunosOrdenados = [...alunos]
            alunosOrdenados.sort((a, z) => {
                return a[1].localeCompare(z[1])
            })
            // console.table(alunosOrdenados)
            // Criando um cabeçalho para tabela

            let listaAlunos = alunosOrdenados
                .map((a) => {
                    return {
                        Matrícula: a[0],
                        Nome: a[1],
                        Idade: a[2],
                        Peso: a[3],
                        Altura: a[4],
                        Vip: a[5]
                    }
                })
            console.table(listaAlunos)
        }

        console.log('')

        prompt('Enter...')
    }


}
// CRUD - read fim     <<<<<<<<<<<<<<<<<<<<


// CRUD - update       >>>>>>>>>>>>>>>>>>>>
function editarAluno() {
    console.clear()
    console.log('=====ALTERAR ALUNO======')
    console.log('')

    prompt('ENTER...')
}
// CRUD - update fim   <<<<<<<<<<<<<<<<<<<<


// CRUD - delete       >>>>>>>>>>>>>>>>>>>>
function excluirAluno() {
    console.clear()
    console.log('=====EXCLUIR ALUNO======')
    console.log('')

    prompt('ENTER...')
}
// CRUD - delete fim   <<<<<<<<<<<<<<<<<<<<



// Ficha do aluno      >>>>>>>>>>>>>>>>>>>>
function gerarFichaAluno() {
    console.clear()
    console.log('=====FICHA DO ALUNO======')
    console.log('')

    let buscarMatricula = Number(prompt('Digite a matricula do aluno: '))

    // Logica principal (Buscar index da estruturade dados)
    let indice = alunos.findIndex((a) => {
        return a[0] === buscarMatricula
    })

    //  Validação da busca(pelo index do aluno)
    if (indice === -1) {
        console.log('Aluno não encontrado')
        console.log('')
    } else {
        // Dados do aluno
        nome = alunos[indice][1]
        idade = alunos[indice][2]
        peso = alunos[indice][3]
        altura = alunos[indice][4]
        vip = alunos[indice][5]

        // Status vip
        let statusVip
        if (vip === true) {
            statusVip = 'Sim (direito a personal trainer)'
        } else {
            statusVip = 'Não (sem direito a personal trainer)'
        }

        // calculo 
        let fcm = (208 - (0.7 * idade))
        let agua = (peso * 35) / 1000
        let imc = (peso / (altura * altura))
        let pesoIdealMin = (18.5 * (altura * altura)).toFixed(2)
        let pesoIdealMax = (24.9 * (altura * altura)).toFixed(2)
        let statusImc

        if (imc < 18.5) {
            statusImc = 'Abaixo do peso'
        } else if (imc < 25) {
            statusImc = 'Peso normal'
        } else if (imc < 30) {
            statusImc = 'Sobre Peso'
        } else if (imc < 35) {
            statusImc = 'Obesidade grau I'
        } else if (imc < 40) {
            statusImc = 'Obesidade grau II'
        } else {
            statusImc = 'Obesidade grau III'
        }

        // Exibir ficha do aluno
        console.log('-------------------------------------')
        console.log('            FICHA DO ALUNO           ')
        console.log('-------------------------------------')
        console.log(`Matricula ${buscarMatricula}`)
        console.log(`nome: ${nome}`)
        console.log(`idade: ${idade}`)
        console.log(`peso: ${peso}`)
        console.log(`altura: ${altura}`)
        console.log(`vip: ${statusVip}`)
        console.log('')
        console.log(`FCM: ${fcm.toFixed(1)} bpm`)
        console.log(`Água recomendada: ${agua.toFixed(1)} litros/dia`)
        console.log(`IMC: ${imc.toFixed(2)} ${statusImc}`)
        console.log(`Faixa de peso ideal ${pesoIdealMin}Kg até ${pesoIdealMax}Kg`)
        console.log('--------------------------------------')
    }

    console.log('')
    prompt('ENTER...')
}
// Ficha do aluno fim   <<<<<<<<<<<<<<<<<<<<

// Relatórios     >>>>>>>>>>>>>>>>>>>>
function gerarRelatorios() {
    do {
        //Sub Menu
        console.clear()
        console.log('=====RELATÓRIOS======')
        console.log('')
        console.log('1. Alunos Vip')
        console.log('2. Média de idade')
        console.log('3. Porcentagem IMC dos alunos')
        console.log('0. Voltar')
        console.log('')

        opcaoRelatorio = Number(prompt('Escolha: '))


        switch (opcaoRelatorio) {
            case 1:
                gerarRelatorioVip()
                break;

            case 2:
                gerarRelatorioMediaDeIdade()
                break;

            case 3:
                gerarRelatorioImc()
                break;

            case 0:
                break;

            default:
                console.log('')
                console.log('Opção invalida')
                prompt('Enter')
        }
    } while (opcaoRelatorio !== 0)

    // Relatórios De Alnos Vip
    function gerarRelatorioVip() {
        console.clear()
        console.log('=====ALUNOS VIP ======')
        console.log('')

        prompt('ENTER...')
    }

    // Relatório média de idade dos alunos
    function gerarRelatorioMediaDeIdade() {
        console.clear()
        console.log('=====MÉDIA DE IDADE======')
        console.log('')

        prompt('ENTER...')
    }

    // Relatório de percentual de IMC
    function gerarRelatorioImc() {
        console.clear()
        console.log('=====IMC DOS ALUNOS======')
        console.log('')

        // Logica principal(map() obter as porcentagem do imc da tabela da estrutura de dados)
        // Validação
        if (alunos.length === 0) {
            console.log('Nenhum aluno cadastrado')
        } else {
            let abaxoDoPeso = 0
            let pesoNormal = 0
            let acimaDoPeso = 0

            alunos.map((a) => {
                let peso = a[3]
                let altura = a[4]
                let imc = (peso / (altura * altura))

                if (imc < 18.5) {
                    abaxoDoPeso++
                } else if (imc < 25) {
                    pesoNormal++
                } else {
                    acimaDoPeso++
                }
            })

            // Cálculo
            let total = alunos.length
            let percAbaixo = ((abaxoDoPeso / total) * 100)
            let percNormal = ((pesoNormal / total) * 100)
            let percAcima = ((acimaDoPeso / total) * 100)

            // Mini Gráfico
            let graficoAbaixo = '■'.repeat(Math.round(percAbaixo / 2))
            let graficoNormal = '■'.repeat(Math.round(percNormal / 2))
            let graficoAcima = '■'.repeat(Math.round(percAcima / 2))

            console.log(`Abaixo do peso: ${percAbaixo.toFixed(1)}%`)
            console.log(graficoAbaixo)
            console.log('')

            console.log(`Abaixo do peso: ${percNormal.toFixed(1)}%`)
            console.log(graficoNormal)
            console.log('')
            
            console.log(`Abaixo do peso: ${percAcima.toFixed(1)}%`)
            console.log(graficoAcima)
            console.log('')
        }


        prompt('ENTER...')
    }

}
// Relatórios fim   <<<<<<<<<<<<<<<<<<<<


// Iniciar o sistema
mainAcademia()
