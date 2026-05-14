
import { 
    config, 
    skuProduto, 
    nomeProduto, 
    precoProduto,
    descontoProduto,
    dataLancamento
} from "../models/produtoModel.js";
import { validarProduto } from "../validators/produtoValidator.js";

const precoProdutoFloat = parseFloat(precoProduto);
const descontoProdutoFloat = parseFloat(descontoProduto);

let estoqueProduto = 50;
let promocaoAtiva = false;
let promotionalTag;

const totalValorEstoque = precoProdutoFloat * estoqueProduto; 

// Função para exibir o estado atual do produto
export function getProdutoStatus(titulo = "Status do Produto") {
    console.log(`\n=== ${titulo} ===`);
    console.log(`SKU: ${skuProduto}`);
    console.log(`Produto: ${nomeProduto}`);
    console.log(`Promoção ativa? ${promocaoAtiva}`);
    console.log(`Tag de Promoção: ${promotionalTag}`);
    console.log(`\n`);
    console.log(`Preço: R$ ${precoProdutoFloat.toFixed(2)}`);
    console.log(`Desconto: ${descontoProdutoFloat.toFixed(2)}%`);
    console.log(`Estoque: ${estoqueProduto}`);
    console.log(`Valor do Estoque: R$ ${totalValorEstoque.toFixed(2)}`);
    console.log(`Config (minEstoque/maxEstoque): ${config.minEstoque} / ${config.maxEstoque}`);
    console.log(`\n`);
    console.log(`Data de Lançamento: ${dataLancamento ? dataLancamento : "Produto sem data de lançamento"}`);
    console.log(`\n`);

}

// Função para criar um novo produto com parâmetros personalizados
export function criarProduto(sku, nome, preco, estoque = 0, ativo = true) {
    console.log(`Produto criado: ${nome} (SKU: ${sku})`);
    console.log(`Preço: R$ ${preco.toFixed(2)}, Estoque: ${estoque}, Ativo: ${ativo}`);
    return { sku, nome, preco, estoque, ativo };

}

// Parâmetros rest para registrar eventos com múltiplas tags
export function registrarEvento(eventoId, ...tags) {
    console.log(`Evento ${eventoId} - tags: ${tags.join(", ")}`);
}

// Função para calcular o preço final do produto considerando o desconto
export function calcularPrecoFinal() {

    if (!promocaoAtiva) {
        return {
            precoFinal: precoProdutoFloat,
            descontoReal: 0
        };
    }
    const valorDesconto = precoProdutoFloat * (descontoProdutoFloat / 100);
    return {
        precoFinal: precoProdutoFloat - valorDesconto,
        descontoReal: valorDesconto
    };

}

// Função para vender o produto, reduzindo o estoque
export function venderProduto(quantidade) {   

    if (quantidade > estoqueProduto) {
        console.log(`Venda cancelada: estoque insuficiente (${estoqueProduto} disponível).`);
        return false;
    }
    if (quantidade <= 0) {
        console.log("Venda cancelada: quantidade deve ser maior que zero.");
        return false;
    }
    estoqueProduto -= quantidade;

    const resultado = calcularPrecoFinal();
    const valorVenda = resultado.precoFinal * quantidade;

    console.log(`Venda realizada: ${quantidade} unidades vendidas por R$ ${valorVenda.toFixed(2)}.`);
    if (promocaoAtiva) {
        console.log(`Desconto aplicado: R$ ${resultado.descontoReal.toFixed(2)} por unidade.`);
    }

    registrarEvento("VENDA", "quantidade: " + quantidade, "valor: " + valorVenda.toFixed(2));

    getProdutoStatus(`Após vender ${quantidade} unidades`);
    return true;
}

// Função para alterar a promoção do produto
export function atualizarPromocao(status) {
    promocaoAtiva = status;
    console.log(`Promoção ${status ? "ativada" : "desativada"}.`);

    atualizarTagPromocao();

    getProdutoStatus("Promoção atualizada");
}

// Função para atualizar a tag de promoção com base no status da promoção
export function atualizarTagPromocao() {
    if (promocaoAtiva) {
        promotionalTag = "Promoção Ativa";
    } else {
        promotionalTag = "Sem Promoção";
    }
}

// Função para atualizar a configuração de estoque
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

    getProdutoStatus("Configuração atualizada");
    return true;
}

// Função para atualizar a promoção ativa
export function togglePromocao() {
    atualizarPromocao(!promocaoAtiva);
}

// Função para validar o produto atual usando as regras definidas no validador
export function validarProdutoAtual() {
    console.log("\n=== Validação do Produto Atual ===");
    const resultado = validarProduto(
        skuProduto,
        nomeProduto,
        precoProduto,
        estoqueProduto
    );

    if (resultado.valido) {
        console.log("Produto válido! Todos os campos estão OK.");
    } else {
        console.log("Produto inválido. Erros encontrados:");
        resultado.erros.forEach((erro) => console.log(`- ${erro}`));
    }
    console.log("");
}
