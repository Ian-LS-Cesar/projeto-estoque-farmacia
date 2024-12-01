const getConnection = require('../config/db');

// CREATE - Adicionar um novo pedido
const createPedido = (req, res) => {
    const { PreOrder_Id } = req.body;
    const db = getConnection(); // Obtém a conexão

    db.query(
        'INSERT INTO Pedido (PreOrder_Id) VALUES (?)',
        [PreOrder_Id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.status(201).json({ message: 'Pedido adicionado com sucesso' });
        }
    );
};

// READ - Listar todos os pedidos
const getPedidos = (req, res) => {
    const db = getConnection(); // Obtém a conexão

    db.query('SELECT * FROM Pedido', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json(results);
    });
};

// UPDATE - Atualizar dados de um pedido
const updatePedido = (req, res) => {
    const { id } = req.params;
    const { PreOrder_Id } = req.body;
    const db = getConnection(); // Obtém a conexão

    db.query(
        'UPDATE Pedido SET PreOrder_Id = ? WHERE Pedido_Id = ?',
        [PreOrder_Id, id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.status(200).json({ message: 'Pedido atualizado com sucesso' });
        }
    );
};

// DELETE - Remover um pedido
const deletePedido = (req, res) => {
    const { id } = req.params;
    const db = getConnection(); // Obtém a conexão

    db.query('DELETE FROM Pedido WHERE Pedido_Id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({ message: 'Pedido removido com sucesso' });
    });
};

module.exports = {
    createPedido,
    getPedidos,
    updatePedido,
    deletePedido,
};
