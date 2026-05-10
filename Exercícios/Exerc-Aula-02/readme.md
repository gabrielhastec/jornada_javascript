# 🧪 Exercício — Tipos de Dados e Coerção no Sistema de Produtos

> Com base no que você aprendeu sobre tipos primitivos, `null` vs `undefined`, e os perigos da coerção implícita, vamos praticar em um cenário real de uma API de produtos.

## 🎯 Cenário

Você está desenvolvendo o **módulo de cálculo de preços** de um e-commerce. Os dados vêm de diferentes fontes (banco de dados, formulários, APIs externas) e nem sempre estão no tipo correto. Seu trabalho é:

1. Identificar onde ocorre coerção implícita indesejada.
2. Aplicar conversão explícita para evitar bugs.
3. Diferenciar corretamente `null` e `undefined`.
4. Verificar tipos com `typeof`.

---

## 📝 Tarefa (Para ser resolvida por você)

Dado o código abaixo (que contém **vários erros** relacionados a tipos e coerção), você deve:

- Corrigir o código para que ele funcione conforme esperado (veja a saída desejada).
- Usar **conversão explícita** (`Number()`, `String()`, `parseInt()`, `parseFloat()`) sempre que necessário.
- Não alterar a estrutura geral (const/let já estão definidas).
- Ao final, escrever um pequeno comentário explicando cada correção.

### 🚨 Código bugado (copie e analise)

```javascript
// ==========================================
// Dados do produto (simulando fontes variadas)
// ==========================================
const productName = "Smart Watch";          // string
const basePrice = "299.99";                 // string (vindo de um formulário)
const discountPercent = "10";               // string (vindo de uma API)
const stock = 25;                           // number
let promotionalTag;                         // não recebeu valor ainda
const releaseDate = null;                   // data de lançamento não definida

// ==========================================
// Cálculos (com problemas!)
// ==========================================
const discountValue = basePrice * (discountPercent / 100);   // ???
const finalPrice = basePrice - discountValue;                // ???
const totalStockValue = basePrice * stock;                   // ???

// ==========================================
// Exibição das informações
// ==========================================
console.log("=== INFORMAÇÕES DO PRODUTO ===");
console.log("Nome:", productName);
console.log("Preço base (R$):", basePrice);
console.log("Desconto (%):", discountPercent);
console.log("Valor do desconto (R$):", discountValue);
console.log("Preço final (R$):", finalPrice);
console.log("Estoque:", stock);
console.log("Valor total do estoque (R$):", totalStockValue);
console.log("Tag promocional:", promotionalTag);
console.log("Data de lançamento:", releaseDate);
console.log("Tipo da data de lançamento:", typeof releaseDate); // cuidado!
console.log("Tipo da tag promocional:", typeof promotionalTag);
```

### 🎯 Saída desejada (após correção)

```text
=== INFORMAÇÕES DO PRODUTO ===
Nome: Smart Watch
Preço base (R$): 299.99
Desconto (%): 10
Valor do desconto (R$): 30.00
Preço final (R$): 269.99
Estoque: 25
Valor total do estoque (R$): 7499.75
Tag promocional: undefined
Data de lançamento: null
Tipo da data de lançamento: object
Tipo da tag promocional: undefined
```

### 1️⃣ O que você precisa fazer?

- Copie o código para um arquivo `.js` (ex: `tipos-e-coercao.js`).
- Corrija as linhas onde ocorrem operações aritméticas com strings.
- Use `Number()`, `parseFloat()` ou `parseInt()` conforme apropriado.
- Observe a diferença entre `null` e `undefined` nos tipos exibidos.
- **Não remova** a linha `let promotionalTag;` (ela deve continuar undefined).

### 2️⃣ Desafio extra (opcional)

- Adicione uma verificação: se `promotionalTag` for `undefined`, exiba "Nenhuma tag definida" em vez de `undefined` no console.
- Adicione um cálculo que trate o caso de `releaseDate` ser `null` e exiba "Data não informada".

---

## 🧠 Reflexão (responda no código como comentário)

1. **Por que `typeof null` retorna `"object"` mesmo `null` sendo um tipo primitivo?**  
   *Resposta:* É um erro histórico da primeira versão do JavaScript que nunca foi corrigido para não quebrar códigos existentes.

2. **Qual a diferença prática entre `null` e `undefined` em uma API?**  
   *Exemplo:* `undefined` geralmente indica um campo que não foi enviado/definido; `null` indica que o campo foi intencionalmente definido como vazio/sem valor (ex: data de exclusão).

3. **Dê um exemplo de coerção implícita que poderia causar um erro num sistema financeiro.**  
   *Exemplo:* Somar `"100" + 200` resultaria em `"100200"` em vez de `300`, gerando valores errados em extratos bancários.

---

Esse exercício reforça o uso correto de tipos, a verificação com `typeof`, e a **conversão explícita** como boa prática para evitar os bugs clássicos do JavaScript. Agora você está pronto para a próxima aula! 🚀
