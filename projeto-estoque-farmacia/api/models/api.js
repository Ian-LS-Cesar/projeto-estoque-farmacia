const express = require('express');
const getConnection = require('../config/db');  // Importa a função que retorna a conexão com o banco
const cors = require('cors');

// Defina a variável app primeiro
const app = express();
const PORT = 3000;

// Habilita CORS para todas as rotas
app.use(cors());

// Middleware para processar corpo das requisições em JSON
app.use(express.json()); // Express já inclui o body-parser a partir da versão 4.16

// Importar todas as rotas
const remediosRoutes = require('../routes/remediosRoute');
const equipamentosRoutes = require('../routes/equipamentosRoute');
const preparadorRoutes = require('../routes/preparadorRoute');
const veiculosRoutes = require('../routes/veiculosRoute');
const apoioRoutes = require('../routes/apoioRoute');
const preOrderRoutes = require('../routes/PreOrderRoute');
const pedidoRoutes = require('../routes/pedidoRoute');
const estadoRoutes = require('../routes/estadoRoute');
const requisitanteRoutes = require('../routes/requisitanteRoute');
const receptorRoutes = require('../routes/receptorRoute');

// Configurar rotas
app.use('/api/remedios', remediosRoutes);
app.use('/api/equipamentos', equipamentosRoutes);
app.use('/api/preparadores', preparadorRoutes);
app.use('/api/veiculos', veiculosRoutes);
app.use('/api/apoiadores', apoioRoutes);
app.use('/api/preorders', preOrderRoutes);
app.use('/api/pedidos', pedidoRoutes);
app.use('/api/estados', estadoRoutes);
app.use('/api/requisitantes', requisitanteRoutes);
app.use('/api/receptores', receptorRoutes);

// Rota principal para checar o servidor
app.get('/', (req, res) => {
    res.send('API do sistema de estoque está funcionando!');
});

// Iniciar o servidor
app.listen(PORT, async () => {
    try {
        const db = await getConnection(); // Pega a conexão do pool de forma assíncrona
        console.log('Conectado ao banco de dados MySQL!');
    } catch (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    }
    console.log(`Servidor rodando na porta ${PORT}`);
});
