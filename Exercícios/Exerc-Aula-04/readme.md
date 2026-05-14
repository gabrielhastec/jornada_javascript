# Exercício 04 — Parâmetros: Default, Rest e Múltiplos Retornos

## 🎯 Objetivo

Evoluir o sistema de gerenciamento de produto utilizando os recursos modernos de funções da **Aula 4**. Vamos eliminar a necessidade de sobrecarga de métodos com **parâmetros padrão**, capturar listas variáveis de argumentos com **Rest parameters** e retornar múltiplos valores através de **objetos**, simulando os retornos complexos que em Java exigiram classes auxiliares.

Você irá:

- Aplicar **valores padrão** em parâmetros de funções já existentes e em novas funções.
- Criar uma função que recebe um número indefinido de *tags* usando o operador `...`.
- Refatorar `calcularPrecoFinal()` para devolver um objeto com mais de uma informação.
- Integrar tudo de forma que o menu interativo continue funcionando normalmente.

---

## 📋 Tarefas

### 1. Parâmetros com valor padrão

**a. `getProdutoStatus`**  
Atualmente a função exige um argumento `titulo`. Dê a ele um valor padrão `"Status do Produto"` para que a chamada `getProdutoStatus()` funcione sem parâmetros.

**b. Nova função `criarProduto`**  
Crie uma função que simula o cadastro de um produto. Ela deve receber `(sku, nome, preco, estoque = 0, ativo = true)`.  

- Exiba no console os dados do produto criado.  
- Retorne um objeto simples com esses dados.

Exemplo de uso:

```javascript
criarProduto("SKU-002", "Calça Jeans", 129.90);          // estoque 0, ativo true
criarProduto("SKU-003", "Tênis", 299.90, 20, false);     // estoque 20, ativo false
```

### 2. Rest parameters

Implemente a função `registrarEvento(eventoId, ...tags)`. Ela deve usar o operador Rest para agrupar todas as *tags* passadas após o primeiro argumento em um array e exibir uma mensagem como:

```bash
Evento VENDA - tags: quantidade: 2, valor: 150.00
```

Essa função será chamada dentro de `venderProduto`, logo após a confirmação da venda, para registrar o evento com as informações relevantes.

### 3. Múltiplos retornos (objeto)

Modifique `calcularPrecoFinal()` para que ela retorne um **objeto** com duas propriedades:

- `precoFinal` – o preço após desconto (ou o preço original se não houver promoção).
- `descontoReal` – o valor do desconto por unidade (0 se não houver promoção).

Exemplo de retorno com promoção ativa e desconto de 10% sobre R$ 79,90:

```javascript
{ 
  precoFinal: 71.91, descontoReal: 7.99 
}
```

### 4. Ajuste em `venderProduto`

Atualize a função `venderProduto` para:

- Utilizar o novo formato de retorno de `calcularPrecoFinal` (desestruturação simples, se preferir, ou acesso por propriedade).
- Exibir uma mensagem extra com o valor do desconto unitário quando a promoção estiver ativa.
- Chamar `registrarEvento` com as *tags* geradas a partir da venda, demonstrando o uso de Rest.

**Dica:** mantenha a validação de quantidade e a lógica de estoque exatamente como estão.

### 5. Integração no menu (opcional)

No `app.js`, você pode simplificar a ação de exibir status graças ao parâmetro padrão:

```javascript
exibirStatus: () => getProdutoStatus(),   // usará o título padrão
```

Se desejar, também pode adicionar uma chamada a `criarProduto` no início do sistema (apenas para teste) e depois removê-la.

---

## ✅ Critérios de aceitação

1. **Parâmetros padrão** implementados em `getProdutoStatus` e na nova função `criarProduto`.
2. **Rest parameter** utilizado em `registrarEvento` e integrado à função de venda.
3. Função `calcularPrecoFinal` retorna um **objeto** com `precoFinal` e `descontoReal`.
4. `venderProduto` utiliza corretamente o objeto retornado e dispara o registro de evento.
5. O sistema é iniciado com `node app.js` e o menu continua 100% funcional.
6. Nenhum conceito não ensinado foi introduzido; todo o código utiliza apenas variáveis, funções e os recursos vistos na Aula 4.

---

## 📁 Estrutura final do projeto

A estrutura de diretórios não muda — todas as alterações ocorrem nos arquivos já existentes, principalmente em `service/produtoService.js`. O `app.js` pode receber um ajuste mínimo, mas a estrutura permanece a mesma:

```text
Exerc-Aula-04/
  models/
    produtoModel.js
    produtoValidator.js
  service/
    produtoService.js
  utils/
    menu.js
    format.js
  app.js
  package.json
  readme.md
```

---

Bom código e divirta-se explorando o poder dos parâmetros em JavaScript! 🚀
