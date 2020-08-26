import express from 'express';

/**
 * Configurando servidor do zero
 * 1) Escrever tudo abaixo
 * 2) yarn tsc
 * 3) node dist/server.js
 * 
 */

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' })
});

app.listen(33333, () => {
  console.log('Server Started')
})