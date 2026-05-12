

function formatarMoeda(valor) {
  return "R$ " + valor.toFixed(2);
}


const formatarPorcentagem = function(valor) {
  return valor.toFixed(2) + "%";
};


const formatarQuantidade = (quantidade, unidade) => quantidade + " " + unidade;

export { formatarMoeda, formatarPorcentagem, formatarQuantidade };