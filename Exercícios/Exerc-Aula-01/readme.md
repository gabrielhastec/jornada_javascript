# 🧪 Exercício — Declaração de Variáveis no Contexto de um Sistema Enterprise

> Imagine que você está construindo o módulo de **gerenciamento de produtos** de uma API. Antes de partir para requisições HTTP, você precisa praticar a declaração de variáveis de forma segura, usando `let` e `const`.

## 🎯 Objetivo

Escreva um script JavaScriptque:

1. Declare as informações fixas de um produto usando `const`.
2. Declare informações que serão alteradas durante a execução usando `let`.
3. Demonstre que `const` não impede a mutação de objetos, apenas impede a reatribuição da referência.
4. Exiba os valores no console antes e depois das alterações.
5. **Nenhum `var` deve ser usado.**

## 📦 Cenário: Produto e Estoque

Você tem os seguintes dados iniciais:

- **Nome do produto** – não muda (ex: `"Smartphone X100"`)
- **Preço original** – fixo (ex: `2500.00`)
- **Código SKU** – fixo (ex: `"SKU-999X"`)
- **Quantidade em estoque** – mudará conforme vendas e reposições
- **Promoção ativa** – pode ser `true` ou `false`, e pode mudar ao longo do tempo

Além disso, existe um **objeto de config** que contém:

- `maxStock` (estoque máximo permitido)
- `minStock` (estoque mínimo de alerta)

## 📝 Tarefa

Escreva o código que:

1. Declare `productName`, `originalPrice`, `sku` e `config` com `const`.
2. Declare `stockQuantity` e `activePromotion` com `let`.
3. Altere o valor de `stockQuantity` (simule uma venda: reduza em 5 unidades).
4. Altere o valor de `activePromotion` para `true`.
5. Modifique um campo do objeto `config` (ex: `minStock` de 10 para 15) – isso é permitido por ser mutação.
6. **Tente** reatribuir o objeto `config` inteiro – isso deve gerar erro.
7. Exiba os valores iniciais e finais no console (incluindo uma tentativa comentada da reatribuição proibida).

---

### Desafio extra (opcional)

1. Por que pudemos alterar config.minStock mesmo sendo config uma const?
2. Se productName fosse um objeto ao invés de string, poderíamos mudar suas propriedades?

---

### ✅ Resposta Esperada (Preenchimento do TODO)

```javascript
// 3. Simular alterações permitidas
stockQuantity -= 5;               // ou stockQuantity = stockQuantity - 5;
activePromotion = true;
config.minStock = 15;
```

### 🧠 Reflexão (para entregar junto com o código)

No seu comentário final, responda:

1. **Qual erro acontece ao tentar reatribuir `config`? Por que isso ocorre?**
2. **Dê um exemplo de quando você usaria `let` em uma API real de produtos.**
3. **Por que `var` não é recomendado? Dê um exemplo fictício de um bug que ele poderia causar.**

---

Esse exercício treina a intenção clara das variáveis, a diferença entre imutabilidade de referência vs. conteúdo, e já introduz conceitos que serão úteis para construir a API de produtos e login.
