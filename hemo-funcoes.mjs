import { question } from "readline-sync"


export function cadastrarDoador(nome, idade, tipoSanguineo) {
        nome = question('Nome do doador: ')
        idade = question('Idade do doador: ')
        tipoSanguineo = question('Tipo Sanguineo: ')
        console.log(`O nome do doador é: ${nome}.`)
        console.log('=============================================================')
        console.log(`A idade de ${nome} é de ${idade} anos, nascido em ${2023 - idade}.`)
        console.log('=============================================================')        
        console.log(`O tipo sanguineo do doador é: ${tipoSanguineo}`)
        console.log('=============================================================')

    }
export function listarDoador() {
    console.log('Liste os doadores.')
}

export function buscarDoadorPorTipoSanguineo() {
    console.log('Busque o doador por tipo sanguineo.')
}

export function buscarDoadorPorDataUltimaDoacao() {
    console.log('Busque o doador pela última data de doação.')
}

