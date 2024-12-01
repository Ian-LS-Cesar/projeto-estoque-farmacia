const getConnection = require('../config/db');

// CREATE - Adicionar novo receptor
const createReceptor = (req, res) => {
    const { Nome, DataEntrega, Email, Telefone, Pedido_Id } = req.body;
    const db = getConnection();  // Estabelece a conexão com o banco de dados

    db.query(
        'INSERT INTO Receptor (Nome, DataEntrega, Email, Telefone, Pedido_Id) VALUES (?, ?, ?, ?, ?)',
        [Nome, DataEntrega, Email, Telefone, Pedido_Id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.status(201).json({ message: 'Receptor adicionado com sucesso' });
        }
    );
};

// READ - Listar todos os receptores
const getReceptores = (req, res) => {
    const db = getConnection();  // Estabelece a conexão com o banco de dados

    db.query('SELECT * FROM Receptor', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json(results);
    });
};

// UPDATE - Atualizar receptor
const updateReceptor = (req, res) => {
    const { id } = req.params;
    const { Nome, DataEntrega, Email, Telefone, Pedido_Id } = req.body;
    const db = getConnection();  // Estabelece a conexão com o banco de dados

    db.query(
        'UPDATE Receptor SET Nome = ?, DataEntrega = ?, Email = ?, Telefone = ?, Pedido_Id = ? WHERE Receptor_Id = ?',
        [Nome, DataEntrega, Email, Telefone, Pedido_Id, id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.status(200).json({ message: 'Receptor atualizado com sucesso' });
        }
    );
};

// DELETE - Remover receptor
const deleteReceptor = (req, res) => {
    const { id } = req.params;
    const db = getConnection();  // Estabelece a conexão com o banco de dados

    db.query('DELETE FROM Receptor WHERE Receptor_Id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({ message: 'Receptor removido com sucesso' });
    });
};

module.exports = {
    createReceptor,
    getReceptores,
    updateReceptor,
    deleteReceptor,
};
