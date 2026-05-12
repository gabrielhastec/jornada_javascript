
# Exercício 03 — Modularização e Menu Interativo com Funções

## 🎯 Objetivo

Evoluir o sistema de gerenciamento de um produto aplicando os conceitos de funções vistos na Aula 3. Vamos:

- Criar um módulo de utilidades (`utils/menu.js`) com um menu interativo via terminal.
- Refatorar `app.js` para iniciar o menu e remover os testes fixos.
- Adicionar pequenas funções auxiliares (formatação, relatório) explorando *function declaration*, *function expression* e *arrow functions*.
- Usar o módulo nativo `readline` e praticar funções como **callbacks**.

---

## 📋 Tarefas

### 1. Criar o módulo `utils/format.js`

Crie um novo arquivo com funções de formatação para reutilização. Use os três tipos de declaração.

### 2. Criar o menu interativo (`utils/menu.js`)

Este módulo usará o pacote nativo `readline` do Node.js para exibir um menu e capturar a escolha do usuário. Toda lógica será baseada em funções e callbacks.

### 3. Adaptar `service/produtoService.js`

Adicione algumas funções pequenas que serão os "gatilhos" do menu, além de organizar o que já existe. Não precisa alterar a lógica de negócio.

- Crie uma função `togglePromocao()` que alterna o status da promoção (se estava ativa, desativa; se inativa, ativa). Use o que já tem (`atualizarPromocao`).
- Crie uma função `validarProdutoAtual()` que usa **function declaration** e valida os valores atuais do produto com as funções do validador que você criará no passo seguinte (essa parte é opcional — serve para dar mais vida ao menu).
- Exporte todas as funções necessárias para o menu.

Exemplo de `togglePromocao`:

```javascript
export function togglePromocao() {
   atualizarPromocao(!promocaoAtiva); // promocaoAtiva é sua variável de controle
}
```

### 4. Criar um validador simples (opcional)

Crie `models/produtoValidator.js` com funções puras que validam cada campo. Isso é um exercício extra de funções e será usado pelo item 5 do menu. Use os três tipos de declaração, como mostrado na aula.

```javascript
// models/produtoValidator.js
function validarNome(nome) { /* ... */ }
const validarPreco = function(preco) { /* ... */ };
const validarEstoque = (estoque) => { /* ... */ };

export function validarProduto(nome, preco, estoque) {
   /* ... */
}
```

### 5. Refatorar `app.js`

Remova todos os testes fixos e mantenha apenas a inicialização do menu. Importe as funções do serviço e passe-as para o menu.

```javascript
// app.js
import { iniciarMenu } from "./utils/menu.js";
import {
   /* ... */
} from "./service/produtoService.js";

// Agrupamos as ações (opcional, pode ser só um objeto literal)
const acoes = {
  exibirStatus: getProdutoStatus,
  vender: venderProduto,
  togglePromocao: togglePromocao,
  setConfig: (min, max) => setConfig({ minEstoque: min, maxEstoque: max }),
  validar: validarProdutoAtual
};

iniciarMenu(acoes);
```

---

## ✅ Critérios de aceitação

1. **Novos módulos criados:** `utils/format.js` e `utils/menu.js`.
2. Pelo menos uma função de cada tipo (declaration, expression, arrow) foi utilizada nos novos módulos.
3. O sistema é iniciado com `node app.js` e exibe um menu funcional.
4. Todas as opções do menu executam as ações corretas (use as funções já existentes no serviço).
5. Nenhum conceito não ensinado (objetos complexos, arrays, classes) foi necessário para entender o exercício.
6. O `app.js` não contém mais os testes fixos antigos; está limpo e serve apenas como ponto de entrada.

---

## 📁 Estrutura final do projeto

´´´
Exerc-Aula-03/
  models/
    produtoModel.js
    produtoValidator.js   (opcional)
  service/
    produtoService.js
  utils/
    menu.js
    format.js
  app.js
  package.json
  readme.md
´´´

---
