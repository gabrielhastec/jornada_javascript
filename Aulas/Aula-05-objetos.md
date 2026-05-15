# Aula 5 — Objetos em Profundidade

## 📌 Visão Geral

Em Java, um objeto é estritamente a instância de uma classe previamente definida. No JavaScript, a abordagem é muito mais flexível: objetos são essencialmente mapas de chave/valor (dicionários) e podem ser criados dinamicamente usando a sintaxe literal.

---

## 🏗️ Criação e Acesso a Propriedades

Podemos estruturar dados complexos, aninhando objetos e arrays facilmente em um único bloco.

```javascript
// ── Criação de objeto literal ────────────────────────────
const product = {
  id: 1001,
  name: "Parafuso M8 x 20mm",
  price: 2.50,
  stock: 1000,
  category: "Fixadores",
  supplier: {
    id: 5,
    name: "Fixadores Brasil Ltda",
    cnpj: "12.345.678/0001-90"
  },
  tags: ["metal", "inox", "resistente"],
  createdAt: new Date("2024-01-15"),
  active: true
};

// ── Acessando propriedades ────────────────────────────────
console.log(product.name);             // dot notation (notação de ponto)
console.log(product["price"]);         // bracket notation (útil quando a chave é uma variável dinâmica)
console.log(product.supplier.name);    // acessando objeto aninhado
console.log(product.tags[0]);          // acessando array dentro do objeto

```

### ⚠️ Acesso a Propriedades Inexistentes

Diferente de outras linguagens que lançam erro imediatamente, o JS retorna `undefined` ao tentar acessar uma propriedade que não existe no primeiro nível. O erro só ocorre se você tentar acessar uma propriedade de algo que já é `undefined`.

```javascript
// ── Acesso a propriedade inexistente ─────────────────────
console.log(product.weight);           // undefined (sem erro!)
console.log(product.supplier.address); // undefined (sem erro!)

// ❌ ERRO FATAL: product.x é undefined, então ler 'y' de undefined quebra a aplicação
// console.log(product.x.y);           // TypeError: Cannot read property 'y' of undefined

```

---

## 🛡️ Operadores de Segurança Modernos

Para evitar os famosos erros de leitura de propriedades indefinidas (`TypeError`), o JavaScript moderno trouxe duas ferramentas essenciais:

```javascript
// ── Optional Chaining (?.) — acesso seguro ───────────────
// O código para de avaliar e retorna undefined se o item anterior for null/undefined
console.log(product?.supplier?.address);    // undefined (protegido, sem erro)
console.log(product?.warranty?.months);     // undefined (protegido, sem erro)

// ── Nullish Coalescing (??) — valor padrão ───────────────
// Retorna a string do lado direito SOMENTE se o lado esquerdo for null ou undefined
const weight = product.weight ?? "Não informado";  // "Não informado" (weight era undefined)
const price = product.price ?? 0;                  // 2.50 (price tinha valor válido)

```

---

## 🛠️ Manipulando Objetos

Os objetos no JS são altamente mutáveis. Você pode adicionar, remover, consultar e listar propriedades em tempo de execução.

```javascript
// ── Adicionando e removendo propriedades ─────────────────
const currentProduct = { id: 1001, name: "Parafuso M8", price: 2.50 };

currentProduct.stock = 1000;           // Adiciona nova propriedade dinamicamente
currentProduct.updatedAt = new Date(); // Adiciona nova propriedade dinamicamente

delete currentProduct.updatedAt;       // Remove a propriedade completamente do objeto

// ── Verificando se propriedade existe ────────────────────
console.log("stock" in currentProduct);             // true
console.log("discount" in currentProduct);          // false
console.log(currentProduct.hasOwnProperty("id"));   // true

// ── Listando propriedades ─────────────────────────────────
// Retorna um array apenas com as CHAVES do objeto
console.log(Object.keys(currentProduct));   
// Saída: ["id", "name", "price", "stock"]

// Retorna um array apenas com os VALORES do objeto
console.log(Object.values(currentProduct)); 
// Saída: [1001, "Parafuso M8", 2.50, 1000]

// Retorna um array de arrays no formato [chave, valor]
console.log(Object.entries(currentProduct)); 
// Saída: [ ["id", 1001], ["name", "Parafuso M8"], ["price", 2.50], ["stock", 1000] ]

```
