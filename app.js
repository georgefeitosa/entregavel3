var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 3001;

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Oi, mundo :-)');
});

app.post('/soma', function(req, res) {
  var body = req.body;
  var resultado = soma(body.a, body.b);
  res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
});

// Iniciando o servidor
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});

// Função de exemplo para realizar a soma
function soma(a, b) {
  return a + b;
}

