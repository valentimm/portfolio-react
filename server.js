const express = require('express');
const path = require('path');
const app = express();

// Servir arquivos estáticos da pasta 'build' (ajuste conforme necessário)
app.use(express.static(path.join(__dirname, 'build')));

// Redirecionar todas as requisições para 'index.html'
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
