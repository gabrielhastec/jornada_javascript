
import { 
    getProdutoStatus,
    venderProduto,
    setPromocao,
    setConfig

} from "./service/produtoService.js";

getProdutoStatus("Estado inicial do produto");

console.log("\n============================");
console.log("\nTentando vender 3 unidades...");
venderProduto(3);
getProdutoStatus("Após vender 3 unidades");

console.log("\n============================");
console.log("\nTentando desativar promoção...");
setPromocao(false);
getProdutoStatus("Após desativar promoção");

console.log("\n============================");
console.log("\nTentando vender 48 unidades...");
venderProduto(48);
getProdutoStatus("Após tentar vender 48 unidades");

console.log("\n============================");
console.log("\nTentando atualizar configuração de estoque...");
setConfig({ minEstoque: 20, maxEstoque: 100 });
getProdutoStatus("Após atualizar configuração de estoque");

console.log("\n============================");
console.log("\nTentando configurar minEstoque maior que maxEstoque...");
setConfig({ minEstoque: 120, maxEstoque: 100 });
getProdutoStatus("Após tentar configurar minEstoque maior que maxEstoque");

console.log("\n============================");
console.log("\nTentando configurar valores negativos...");
setConfig({ minEstoque: -10, maxEstoque: 100 });
getProdutoStatus("Após tentar configurar valores negativos");
