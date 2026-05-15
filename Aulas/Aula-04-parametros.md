# Aula 4 — Parâmetros: Default, Rest e Múltiplos Retornos

## 📌 Visão Geral

O JavaScript oferece recursos modernos e flexíveis para lidarmos com os parâmetros das funções. Se você vem do Java, descobrirá que o JS substitui a necessidade de sobrecarga de métodos (*method overloading*) por **parâmetros com valor padrão**, e utiliza o operador **Rest** como equivalente direto ao *varargs*.

---

## 🎛️ Parâmetros com Valor Padrão (Default Parameters)

Em vez de criar múltiplas versões da mesma função, você pode definir valores padrão diretamente na assinatura. Se o argumento não for passado na chamada, o JavaScript utilizará o valor padrão.

```javascript
// Em Java: seria necessário criar várias assinaturas do mesmo método (sobrecarga).
// Em JS: usamos default params.

function createProduct(name, price, stock = 0, active = true) {
  return { name, price, stock, active };
}

// ── Exemplos de uso ─────────────────────────────────────────

console.log(createProduct("Porca M8", 1.20)); 
// Retorna: { name: 'Porca M8', price: 1.2, stock: 0, active: true }

console.log(createProduct("Porca M8", 1.20, 500)); 
// Retorna: { name: 'Porca M8', price: 1.2, stock: 500, active: true }

console.log(createProduct("Porca M8", 1.20, 500, false)); 
// Retorna: { name: 'Porca M8', price: 1.2, stock: 500, active: false }

```

---

## 📦 Rest Parameters (`...`)

O parâmetro Rest (representado pelos três pontos `...`) permite que uma função receba um número indefinido de argumentos, agrupando-os automaticamente em um **array**. É o equivalente exato do `varargs` no Java.

```javascript
// Recebe N argumentos extras e os agrupa no array 'tags'
function logProductEvent(productId, ...tags) {
  // Utilizamos template literals (crases) para injetar as variáveis
  console.log(`Produto ${productId} - tags: ${tags.join(", ")}`);
}

// ── Exemplo de uso ──────────────────────────────────────────

logProductEvent(1001, "criado", "revisado", "aprovado");
// Saída no console: "Produto 1001 - tags: criado, revisado, aprovado"

```

---

## 🎯 Exercício do Módulo 1

Agora é a hora de colocar a mão na massa e juntar o que aprendemos até aqui.

**Objetivo:**

1. Crie um arquivo `validators.js` e insira a função `validateProduct` construída na **Aula 1.3**.
2. Crie um arquivo principal chamado `index.js`.
3. No `index.js`, importe ou declare sua função e escreva testes cobrindo **pelo menos 5 cenários diferentes**.

### 📋 Cenários de Teste Obrigatórios no `index.js`

* ✅ **Cenário 1:** Um produto totalmente válido.
* ❌ **Cenário 2:** Produto com o nome vazio.
* ❌ **Cenário 3:** Produto com o preço negativo.
* ❌ **Cenário 4:** Produto com o estoque fracionado (ex: `10.5`).
* ❌ **Cenário 5:** Um produto vazio, sem nenhum campo (ex: `{}`).

> **Dica:** Utilize o `console.log()` para imprimir o resultado de cada validação e verificar se o array de `errors` está retornando as mensagens corretas que você configurou.
