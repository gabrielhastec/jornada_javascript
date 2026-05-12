import * as readline from "node:readline";

// Função que exibe as opções e retorna a interface readline
function criarInterface() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
}

// Função principal que inicia o menu
export function iniciarMenu(acoes) {
  const rl = criarInterface();

    function exibirMenu() {

      console.log("\n===== MENU PRINCIPAL =====");
      console.log("1. Exibir status do produto");
      console.log("2. Realizar venda");
      console.log("3. Ativar/desativar promoção");
      console.log("4. Alterar configuração de estoque");
      console.log("5. Validar produto atual");
      console.log("0. Sair");

      rl.question("\nEscolha uma opção: ", (resposta) => {
        processarOpcao(resposta);
      });
    }

    function processarOpcao(opcao) {

      switch (opcao) {
        case "1":
          acoes.exibirStatus();
          break;
        case "2":
          rl.question("Quantidade a vender: ", (qtd) => {
            acoes.vender(Number(qtd));
            exibirMenu();
          });
          return; // interrompe para aguardar input extra
        case "3":
          acoes.togglePromocao();
          break;
        case "4":
          rl.question("Novo minEstoque: ", (min) => {
            rl.question("Novo maxEstoque: ", (max) => {
              acoes.setConfig(Number(min), Number(max));
              exibirMenu();
            });
          });
          return;
        case "5":
          acoes.validar();
          break;
        case "0":
          console.log("Encerrando sistema...");
          rl.close();
          return;
        default:
          console.log("Opção inválida.");

      }

      exibirMenu(); // para opções que não precisam de input extra

    }

  exibirMenu();
  
}
