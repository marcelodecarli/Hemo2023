import { question } from "readline-sync"

export let doadores =[];

export function cadastrarDoador() {
        let nomeDoador = question('Nome do doador: ')
        let idadeDoador = parseInt(question('Idade do doador: '))
        let tipoSanguineoDoador = question('Tipo Sanguineo: ')
        let dataAno = question('Ano da doação: ')
        let dataMes = question('Mês da doação: ')
        let dataDia = question('Dia da doação: ')


        console.log('------------------------- DETALHES DO CADASTRO -------------------------')
        console.log(`O nome do doador é: ${nomeDoador} e sua idade é de ${idadeDoador} anos.`)
        console.log('================================================================')
        console.log(`O tipo sanguineo do doador é: ${tipoSanguineoDoador}`)
        console.log('================================================================')
        console.log(`A data da ultima doação: ${dataDia}/${dataMes}/${dataAno}.`)

        doadores.push(
            {
                nome: nomeDoador,
                idade: idadeDoador,
                tipoSanguineo: tipoSanguineoDoador,
                data: new Date(dataAno,dataMes-1, dataDia)
            }
        );
    }
//-------------------------------------------------------------------------
export function listarDoador() {
    console.log('Liste os doadores.')
    console.table(doadores);
}
//-------------------------------------------------------------------------
export function buscarDoadorPorTipoSanguineo() {
   let tipoSangue = question('Digite o tipo sanguineo: ')
    
    for (let i = 0; i < doadores.length; i++) {
        const doador = doadores[i];
        if(doador.tipoSanguineo == tipoSangue)
            console.table(doador)            
    }

}
//----------------------------------------------------------------------------
export function buscarDoadorPorDataUltimaDoacao() {
        let dataAno01 = question('Ano da doação: ')
        let dataMes01 = parseInt(question('Mês da doação: '))
        let dataDia01 = question('Dia da doação: ')
    
        let data01 = new Date(dataAno01,dataMes01-1, dataDia01)

    for (let i = 0; i < doadores.length; i++) {
        const doador = doadores[i];
        if(doador.data.getFullYear() == data01.getFullYear() &&
           doador.data.getMonth() == data01.getMonth() &&
           doador.data.getDay() == data01.getDay())
            console.table(doador)            
        }
}