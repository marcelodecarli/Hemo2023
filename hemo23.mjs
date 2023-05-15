/*
1. mostra menu de opções numeradas
2. aguarda digitação do número da opção escolida
2.1 testa se a opção é válida (se está no conjunto de opções possíveis)
3. se válida: executa função associada ao número da opção
3.1 senão: informa que a opção é inválida
4. volta para 1.
Ex.

1- Cadastrar
2- Consultar
3- Sair


Digitou 1, então executa função cadastrar()
Digitou 2, então executa função consultar()
Digitou 3, sai do loop do programa
*/
import { question } from "readline-sync"
import * as hemo from "./hemo-funcoes.mjs"

let opcao

while (true) {
    console.clear()
    console.log(
    `
    ======= SISTEMA DE CADASTRO DE DODORES =======
    1 - Cadastrar doador
    2 - Listar Doadores
    3 - Buscar doador por tipo sanguineo
    4 - Buscar doador por data da última doação
    5 - Sair
    `
    )
    opcao = parseInt(question('Digite a opção desejada: '))
    
    switch (opcao) {
        case 1:
            hemo.cadastrarDoador()            
            break;
        case 2:
            hemo.listarDoador()
            break;
        case 3:
            hemo.buscarDoadorPorTipoSanguineo()
            break;
        case 4:
            hemo.buscarDoadorPorDataUltimaDoacao()
            break;
        case 5:
            console.log('Fim do Programa!')
            process.exit(0)
            break;
        default:
            console.log('Opção inválida!!')
            break;
    
        }
        

      

    question('Pressione ENTER para continuar...')
    
   


}

