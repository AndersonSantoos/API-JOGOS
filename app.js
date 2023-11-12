const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');
const port = 3000;
const cors = require('cors');
const setupSwagger = require('./swagger'); // Importe o arquivo swagger.js

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurar o middleware CORS
app.use(cors());

app.use('/jogos', routes);

// Configurar a documentação Swagger
setupSwagger(app);


app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
