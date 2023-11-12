const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Jogos',
      version: '1.0.0',
      description: 'Documentação da API de Jogos',
    },
    servers: [
      {
        url: 'https://api-jogos.onrender.com/', // URL de solicitação.
        description: 'Servidor da aplicação',
      },
    ],
    components: {
      schemas: {
        Jogo: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            nome: { type: 'string' },
            plataformas: { type: 'string' },
            genero: { type: 'string' },
            anoLancamento: { type: 'integer' },
            preco: { type: 'string' },
            imagem: { type: 'string' },
          },
        },
      },
    },
  },
  apis: ['./routes.js'],
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
