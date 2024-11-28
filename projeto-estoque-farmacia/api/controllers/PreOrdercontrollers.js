const getConnection = require('../config/db');

// CREATE - Adicionar um novo PreOrder
const createPreOrder = (req, res) => {
    const { Remedio_Id, Equipamento_Id, Preparador_Id, Veiculo_Id } = req.body;
    const db = getConnection();  // Estabelece a conexão com o banco de dados

    db.query(
        'INSERT INTO PreOrder (Remedio_Id, Equipamento_Id, Preparador_Id, Veiculo_Id) VALUES (?, ?, ?, ?)',
        [Remedio_Id, Equipamento_Id, Preparador_Id, Veiculo_Id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.status(201).json({ message: 'PreOrder adicionada com sucesso' });
        }
    );
};

// READ - Listar todos os PreOrders
const getPreOrders = (req, res) => {
    const db = getConnection();  // Estabelece a conexão com o banco de dados

    db.query('SELECT * FROM PreOrder', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json(results);
    });
};

// UPDATE - Atualizar dados de um PreOrder
const updatePreOrder = (req, res) => {
    const { id } = req.params;
    const { Remedio_Id, Equipamento_Id, Preparador_Id, Veiculo_Id } = req.body;
    const db = getConnection();  // Estabelece a conexão com o banco de dados

    db.query(
        'UPDATE PreOrder SET Remedio_Id = ?, Equipamento_Id = ?, Preparador_Id = ?, Veiculo_Id = ? WHERE PreOrder_Id = ?',
        [Remedio_Id, Equipamento_Id, Preparador_Id, Veiculo_Id, id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.status(200).json({ message: 'PreOrder atualizada com sucesso' });
        }
    );
};

// DELETE - Remover um PreOrder
const deletePreOrder = (req, res) => {
    const { id } = req.params;
    const db = getConnection();  // Estabelece a conexão com o banco de dados

    db.query('DELETE FROM PreOrder WHERE PreOrder_Id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({ message: 'PreOrder removida com sucesso' });
    });
};

module.exports = {
    createPreOrder,
    getPreOrders,
    updatePreOrder,
    deletePreOrder,
};
