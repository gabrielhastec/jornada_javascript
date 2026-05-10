
import { 
    getProdutoStatus,
    venderProduto,
    setPromocao

} from "./service/produtoService.js";

getProdutoStatus("Estado inicial do produto");

venderProduto(3);
getProdutoStatus("Após vender 3 unidades");