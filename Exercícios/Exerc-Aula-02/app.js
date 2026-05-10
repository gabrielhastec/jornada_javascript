
import { 
    getProdutoStatus,
    venderProduto,
    atualizarPromocao,
    setConfig

} from "./service/produtoService.js";

getProdutoStatus("Estado inicial do produto");

console.log("\n============================");
console.log("\nTentando vender 3 unidades sem desconto...");
venderProduto(3);


console.log("\n============================");
console.log("\nTentando ativar promoção...");
atualizarPromocao(true);


console.log("\n============================");
console.log("\nTentando vender 3 unidades com desconto...");
venderProduto(3);


console.log("\n============================");
console.log("\nTentando vender 48 unidades...");
venderProduto(48);


console.log("\n============================");
console.log("\nTentando desativar promoção...");
atualizarPromocao(false);


console.log("\n============================");
console.log("\nTentando atualizar configuração de estoque...");
setConfig({ minEstoque: 20, maxEstoque: 100 });


console.log("\n============================");
console.log("\nTentando configurar minEstoque maior que maxEstoque...");
setConfig({ minEstoque: 120, maxEstoque: 100 });


console.log("\n============================");
console.log("\nTentando configurar valores negativos...");
setConfig({ minEstoque: -10, maxEstoque: 100 });
