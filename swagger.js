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
        url: 'https://api-jogos.onrender.com/', // URL de solitação para testar documentação.
        description: 'Servidor da aplicação',
      },
      
      // {
      //   url: 'https://api-jogos.onrender.com',
      //   description: 'Ambiente de produção',
      // },
    ],
  },
  apis: ['./routes.js'],
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
