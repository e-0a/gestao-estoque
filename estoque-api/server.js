/**
 * 
 * Arquivo responsável pela configuração e execução do Banco de Dados 'Estoque'
 * 
 */


const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Aplicação rodando na porta : ', port);
});