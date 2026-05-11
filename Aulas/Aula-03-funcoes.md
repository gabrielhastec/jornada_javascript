# Aula 3 — Funções: A Base de Tudo

## 📌 Visão Geral

No JavaScript, existem múltiplas formas de definir funções. Cada abordagem possui um propósito e um comportamento diferente, especialmente em relação ao escopo, ao comportamento da palavra-chave `this` e ao *hoisting* (elevação).

---

## 🛠️ Tipos de Declaração de Funções

### 1. Function Declaration (Declaração Padrão)

Sofre *hoisting*, o que significa que a função **pode ser chamada ANTES** de ser declarada no código.

```javascript
// Pode ser chamada ANTES da declaração devido ao hoisting
function validateProductName(name) {
  if (!name || name.trim().length === 0) {
    return { valid: false, error: "Nome do produto não pode ser vazio" };
  }
  if (name.trim().length < 3) {
    return { valid: false, error: "Nome deve ter ao menos 3 caracteres" };
  }
  return { valid: true, error: null };
}

```

### 2. Function Expression (Expressão de Função)

A função é atribuída a uma variável. **Não sofre hoisting**, o que a torna uma boa prática quando você deseja garantir um controle rígido sobre a ordem de execução do seu código.

```javascript
// Não sofre hoisting. O uso do 'const' previne reatribuições.
const validatePrice = function(price) {
  if (typeof price !== "number") {
    return { valid: false, error: "Preço deve ser um número" };
  }
  if (price <= 0) {
    return { valid: false, error: "Preço deve ser maior que zero" };
  }
  return { valid: true, error: null };
};

```

### 3. Arrow Function (Função de Seta)

Introduzida no ES6, possui uma sintaxe mais enxuta e **NÃO tem seu próprio `this**` (ela herda o `this` do contexto onde foi criada). Ideal para *callbacks* e funções simples.

```javascript
// Sintaxe moderna e curta
const validateStock = (quantity) => {
  if (!Number.isInteger(quantity)) {
    return { valid: false, error: "Estoque deve ser um número inteiro" };
  }
  if (quantity < 0) {
    return { valid: false, error: "Estoque não pode ser negativo" };
  }
  return { valid: true, error: null };
};

// Arrow function com retorno implícito (sem as chaves = return automático)
const formatPrice = (price) => price.toFixed(2);

```

---

## 🚀 Aplicando na Prática: Função de Validação Completa

Agora vamos criar a primeira função real do nosso sistema (`StockManager`) — uma validação completa dos dados de um produto antes de persisti-lo no banco de dados.

```javascript
// stockmanager/validators.js
// Validação completa de produto recebido via formulário ou API

function validateProduct(productData) {
  const errors = [];   // Array para acumular os erros encontrados

  // Valida nome
  if (!productData.name || productData.name.trim().length === 0) {
    errors.push("Nome do produto é obrigatório");
  } else if (productData.name.trim().length < 3) {
    errors.push("Nome deve ter ao menos 3 caracteres");
  } else if (productData.name.trim().length > 100) {
    errors.push("Nome não pode ter mais de 100 caracteres");
  }

  // Valida preço
  if (productData.price === undefined || productData.price === null) {
    errors.push("Preço é obrigatório");
  } else if (typeof productData.price !== "number" || productData.price <= 0) {
    errors.push("Preço deve ser um número maior que zero");
  }

  // Valida estoque
  if (productData.stock === undefined) {
    errors.push("Estoque é obrigatório");
  } else if (!Number.isInteger(productData.stock) || productData.stock < 0) {
    errors.push("Estoque deve ser um inteiro não-negativo");
  }

  // Valida categoria (opcional, mas se informado deve ser string)
  if (productData.category !== undefined && typeof productData.category !== "string") {
    errors.push("Categoria deve ser uma string");
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

```

### 🧪 Testando a Função

```javascript
// ── Teste 1: Produto Válido ─────────────────────────────────
const product1 = { 
  name: "Parafuso M8", 
  price: 2.50, 
  stock: 1000, 
  category: "Fixadores" 
};

console.log(validateProduct(product1));
// Resultado esperado:
// { valid: true, errors: [] }


// ── Teste 2: Produto Inválido ───────────────────────────────
const product2 = { 
  name: "AB", 
  price: -5, 
  stock: 10.5 
};

console.log(validateProduct(product2));
// Resultado esperado:
// { 
//   valid: false, 
//   errors: [
//     "Nome deve ter ao menos 3 caracteres",
//     "Preço deve ser um número maior que zero",
//     "Estoque deve ser um inteiro não-negativo"
//   ]
// }

```
