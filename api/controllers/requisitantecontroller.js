const getConnection = require('../config/db');  // Importando a função para obter a conexão

// CREATE - Adicionar novo requisitante
const createRequisitante = (req, res) => {
    const { NomeRequisitante, Profissional, Email, Pedido_Id } = req.body;
    const db = getConnection();  // Estabelece a conexão com o banco de dados

    db.query(
        'INSERT INTO Requisitante (NomeRequisitante, Profissional, Email, Pedido_Id) VALUES (?, ?, ?, ?)',
        [NomeRequisitante, Profissional, Email, Pedido_Id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.status(201).json({ message: 'Requisitante adicionado com sucesso' });
        }
    );
};

// READ - Listar todos os requisitantes
const getRequisitantes = (req, res) => {
    const db = getConnection();  // Estabelece a conexão com o banco de dados

    db.query('SELECT * FROM Requisitante', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json(results);
    });
};

// UPDATE - Atualizar requisitante
const updateRequisitante = (req, res) => {
    const { id } = req.params;
    const { NomeRequisitante, Profissional, Email, Pedido_Id } = req.body;
    const db = getConnection();  // Estabelece a conexão com o banco de dados

    db.query(
        'UPDATE Requisitante SET NomeRequisitante = ?, Profissional = ?, Email = ?, Pedido_Id = ? WHERE Requisitante_Id = ?',
        [NomeRequisitante, Profissional, Email, Pedido_Id, id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.status(200).json({ message: 'Requisitante atualizado com sucesso' });
        }
    );
};

// DELETE - Remover requisitante
const deleteRequisitante = (req, res) => {
    const { id } = req.params;
    const db = getConnection();  // Estabelece a conexão com o banco de dados

    db.query('DELETE FROM Requisitante WHERE Requisitante_Id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({ message: 'Requisitante removido com sucesso' });
    });
};

module.exports = {
    createRequisitante,
    getRequisitantes,
    updateRequisitante,
    deleteRequisitante,
};
