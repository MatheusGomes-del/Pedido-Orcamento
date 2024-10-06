const port = 3087;
const app = require('./app');
require('dotenv').config();

app.listen(port);

console.log(`API rodando na porta ${port}`);