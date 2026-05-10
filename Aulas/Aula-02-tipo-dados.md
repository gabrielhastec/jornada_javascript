# Aula 2 — Tipos de Dados no JavaScript

## 📌 Visão Geral

JavaScript possui 7 tipos primitivos. Diferente do Java, onde os tipos são definidos na declaração, no JavaScript o tipo é determinado dinamicamente pelo **valor** atribuído à variável.

## 🧱 Tipos Primitivos

Abaixo estão os principais tipos de dados e como utilizá-los:

```javascript
// ── Tipos Primitivos ──────────────────────────────────────
const productId = 1001;              // number (int e float são o mesmo tipo no JS)
const productName = "Parafuso M8";   // string
const isActive = true;               // boolean
const deletedAt = null;              // null (ausência intencional de valor)
let categoryId;                      // undefined (variável declarada, mas não inicializada)

// ── Verificando tipos com typeof ──────────────────────────
console.log(typeof productId);       // "number"
console.log(typeof productName);     // "string"
console.log(typeof isActive);        // "boolean"
console.log(typeof null);            // "object" ⚠️ BUG histórico do JS, cuidado!
console.log(typeof categoryId);      // "undefined"

```

### 🆚 Diferença entre `null` e `undefined`

É comum confundir esses dois estados, mas eles representam conceitos diferentes:

* **`null`**: Significa "não tem valor, e isso é **intencional**".
* *Ex:* `const supplier = null;` (sabemos que o fornecedor não está cadastrado ainda).

* **`undefined`**: Significa "nunca foi definido" ou "ainda não possui valor".
* *Ex:* `let warrantyDate;` (variável criada, mas a garantia não foi informada ainda).

---

## ⚠️ O Perigo do JavaScript: Coerção de Tipos

O JavaScript frequentemente tenta converter tipos automaticamente durante as operações. Esse comportamento é chamado de **coerção implícita** e é uma das maiores fontes de bugs na linguagem.

### Comportamentos Surpreendentes (Coerção Implícita)

```javascript
console.log("10" + 2);      // "102" (string - ocorre concatenação!)
console.log("10" - 2);      // 8     (número - a subtração converte a string)
console.log("10" * 2);      // 20    (número)
console.log(true + 1);      // 2     (true vira 1)
console.log(false + 1);     // 1     (false vira 0)
console.log(null + 1);      // 1     (null vira 0)
console.log(undefined + 1); // NaN   (undefined não pode ser convertido para número)

```

### ✅ Boas Práticas: Conversão Explícita

Para evitar resultados inesperados, **sempre converta os valores explicitamente**:

```javascript
const price = Number("10.50");            // 10.5
const priceStr = String(10.50);           // "10.5"
const priceInt = parseInt("10px");        // 10 (extrai o número inicial inteiro)
const priceFloat = parseFloat("10.50kg"); // 10.5 (extrai o número inicial com decimais)

```

---

> 💡 **Nota sobre o TypeScript**
> No TypeScript, a coerção implícita de tipos incompatíveis deixa de ser uma dor de cabeça, pois o compilador vai reclamar (gerar erro) se você tentar somar uma string com um número sem uma conversão explícita. No entanto, como o TS compila para JS no final das contas, **entender esse comportamento nativo é essencial para debugar** seu código corretamente.
