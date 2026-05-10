
import { 
    config, 
    skuProduto, 
    nomeProduto, 
    precoProduto
} from "../models/produtoModel.js";

let estoqueProduto = 50;
let activeProduto = true;

// Função para exibir o estado atual do produto
export function getProdutoStatus(titulo) {
    console.log(`\n=== ${titulo} ===`);
    console.log(`Produto: ${nomeProduto}`);
    console.log(`SKU: ${skuProduto}`);
    console.log(`Preço: R$ ${precoProduto.toFixed(2)}`);
    console.log(`Estoque: ${estoqueProduto}`);
    console.log(`Promoção ativa? ${activeProduto}`);

    console.log(`Config (minEstoque/maxEstoque): ${config.minEstoque} / ${config.maxEstoque}`);
  
}

// Função para vender o produto, reduzindo o estoque
export function venderProduto(quantidade) {    

    if (quantidade > estoqueProduto) {
        console.log(`Venda cancelada: estoque insuficiente (${estoqueProduto} disponível).`);
        return false;
    }
    estoqueProduto -= quantidade;
    console.log(`Venda de ${quantidade} unidade(s) realizada. Estoque restante: ${estoqueProduto}`);
    return true;

}

// Função para alterar a promoção do produto
export function setPromocao(status) {
    activeProduto = status;
    console.log(`Promoção ${status ? "ativada" : "desativada"}.`);
}

export function setConfig(newConfig) {
    if (newConfig.minEstoque < 0 || newConfig.maxEstoque < 0) {
        console.log("Configuração inválida: minEstoque e maxEstoque devem ser não negativos.");
        return false;
    }
    if (newConfig.minEstoque > newConfig.maxEstoque) {
        console.log("Configuração inválida: minEstoque não pode ser maior que maxEstoque.");
        return false;
    }
    config.maxEstoque = newConfig.maxEstoque;
    config.minEstoque = newConfig.minEstoque;
    console.log(`Config atualizada: min=${config.minEstoque}, max=${config.maxEstoque}`);
  return true;
}

