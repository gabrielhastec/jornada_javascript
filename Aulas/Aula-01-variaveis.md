# Aula 1 — Declaração de Variáveis: `let`, `const` e `var`

## 📌 Visão Geral

Diferente do Java, onde as variáveis são declaradas com tipagem explícita, no JavaScript (JS) o tipo é **dinâmico**. No entanto, a forma como você declara uma variável no JS moderno comunica claramente a intenção e o comportamento esperado do seu código.

## 📏 Regra Prática

Para garantir um código mais seguro e previsível, siga este padrão:

* **Sempre** utilize `const` por padrão.
* Utilize `let` **apenas** quando precisar reatribuir um valor à variável.
* **Nunca** utilize `var`. Ele possui comportamento de *hoisting* (elevação), o que frequentemente causa bugs silenciosos e difíceis de rastrear.

---

## 💻 Exemplos de Implementação

### ❌ O que NÃO fazer (Mindset de Java)

Não utilize `var` em projetos JavaScript ou TypeScript modernos:

```javascript
var productName = "Parafuso M8";
var productPrice = 2.50;

```

### ✅ O que FAZER (Padrão JS/TS Moderno)

Declare com intenção clara:

```javascript
const productName = "Parafuso M8"; // Constante: não vai mudar
const productPrice = 2.50;         // Constante: não vai mudar
let stockQuantity = 100;           // Let: vai mudar (ex: variação de estoque com vendas)

// Tentativa de reatribuir um const resultará em erro em tempo de execução
// productName = "outro nome";     // TypeError: Assignment to constant variable

```

---

## 🔍 Entendendo o comportamento do `const`

**Por que `const` não significa "imutável"?**

Este é um ponto que costuma confundir quem está migrando do Java para o ecossistema JavaScript. Em JS, a palavra-chave `const` garante que a **referência** (o endereço na memória) não mude, mas o **conteúdo** de estruturas complexas, como objetos e arrays, pode ser alterado normalmente.

### Exemplo de Mutabilidade em Objetos `const`

```javascript
const product = {
  name: "Parafuso M8",
  price: 2.50,
  stock: 100
};

// ✅ PERMITIDO: Isso funciona! 
// A referência (endereço) não muda, apenas o conteúdo interno.
product.stock = 95;       
product.price = 3.00;     

// ❌ ERRO: Isso quebra! 
// Estamos tentando trocar a referência inteira da variável.
// product = { name: "outro" }; // TypeError: Assignment to constant variable

```
