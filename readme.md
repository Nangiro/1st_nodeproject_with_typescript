Primeiro Projeto Node com Typescript

1) yarn init -y
2) yarn add express
3) yarn add typescript -D
4) yarn tsc --init (cria o arquivo tsconfig.json)
4) Criar pasta src
5) Criar arquivo server.ts
6) Em tsconfig.json alterar o "rootDir": "./", para "rootDir": "./src",
7) Em tsconfig.json alterar o "outDir": "./", para "outDir": "./dist",
8) Adicionar import express from 'express'; no arquivo server.ts
9) yarn aff @types/express -D para poder usar o import do express
10) Criar um script em package.json para dar refresh
  10.1) Instalar yarn add ts-node-dev -D
  10.2) Em package.json criar:
    "scripts": {
      "build": "tsc",
      "dev:server": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts"
    },
  10.3) para executar o server usar yarn dev:server
