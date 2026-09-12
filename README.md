# RoomForYou

## Como executar o projeto

### Pré-requisitos

- Node.js **20.19 ou superior** (ou Node.js 22.12 ou superior);
- npm, instalado junto com o Node.js.

Não é necessário instalar React, Vite, Bootstrap ou os gráficos separadamente. Essas dependências estão listadas no `package.json` e serão instaladas pelo npm.

### Instalação

Depois de baixar e extrair o projeto do GitHub, abra um terminal **dentro da pasta que contém o arquivo `package.json`** e execute:

```bash
npm install
npm run dev
```

Abra no navegador o endereço exibido no terminal, normalmente `http://localhost:5173`.

> Não abra o arquivo `index.html` diretamente. O projeto precisa ser iniciado pelo Vite com `npm run dev`.

### Se o projeto já foi instalado anteriormente

Para instalar exatamente as versões registradas no lockfile, use:

```bash
npm ci
npm run dev
```

Se o terminal informar que `node` ou `npm` não foi encontrado, instale o Node.js pelo site oficial e abra um novo terminal antes de repetir os comandos.
