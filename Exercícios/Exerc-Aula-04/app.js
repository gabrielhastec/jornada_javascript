
import { iniciarMenu } from "./utils/menu.js";
import {
    getProdutoStatus,
    venderProduto,
    togglePromocao,
    setConfig,
    validarProdutoAtual
} from "./service/produtoService.js";

const acoes = {
    exibirStatus: () => getProdutoStatus(),
    vender: venderProduto,
    togglePromocao: togglePromocao,
    setConfig: (min, max) => setConfig({ minEstoque: min, maxEstoque: max }),
    validar: validarProdutoAtual
};

iniciarMenu(acoes);
