
function validarSku(sku) {
    if (typeof sku !== "string" || sku.trim() === "") {
        return "SKU inválido: deve ser uma string não vazia.";
    }
    return null;
}

const validarNome = function(nome) {
    if (typeof nome !== "string" || nome.trim() === "") {
        return "Nome inválido: deve ser uma string não vazia.";
    }
    return null;
};

const validarPreco = (preco) => {
    const precoNum = parseFloat(preco);
    if (isNaN(precoNum) || precoNum <= 0) {
        return "Preço inválido: deve ser um número positivo.";
    }
    return null;
};

const validarEstoque = (estoque) => {
    const estoqueNum = Number(estoque);
    if (!Number.isInteger(estoqueNum) || estoqueNum < 0) {
        return "Estoque inválido: deve ser um inteiro não negativo.";
    }
    return null;
};

function validarProduto(sku, nome, preco, estoque) {
    const erros = [];
    const erroSku = validarSku(sku);
    if (erroSku) erros.push(erroSku);
    const erroNome = validarNome(nome);
    if (erroNome) erros.push(erroNome);
    const erroPreco = validarPreco(preco);
    if (erroPreco) erros.push(erroPreco);
    const erroEstoque = validarEstoque(estoque);
    if (erroEstoque) erros.push(erroEstoque);

    if (erros.length > 0) {
        return { valido: false, erros: erros };
    }
    return { valido: true, erros: [] };
}

export { validarSku, validarNome, validarPreco, validarEstoque, validarProduto };
