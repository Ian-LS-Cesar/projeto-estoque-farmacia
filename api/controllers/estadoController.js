const getConnection = require('../config/db');

// CREATE - Adicionar novo estado
const createEstado = (req, res) => {
    const { Estado, Pedido_Id } = req.body;
    const db = getConnection(); // Obtém a conexão

    db.query(
        'INSERT INTO Estado (Estado, Pedido_Id) VALUES (?, ?)',
        [Estado, Pedido_Id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.status(201).json({ message: 'Estado adicionado com sucesso' });
        }
    );
};

// READ - Listar todos os estados
const getEstados = (req, res) => {
    const db = getConnection(); // Obtém a conexão

    db.query('SELECT * FROM Estado', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json(results);
    });
};

// UPDATE - Atualizar estado
const updateEstado = (req, res) => {
    const { id } = req.params;
    const { Estado, Pedido_Id } = req.body;
    const db = getConnection(); // Obtém a conexão

    db.query(
        'UPDATE Estado SET Estado = ?, Pedido_Id = ? WHERE Estado_Id = ?',
        [Estado, Pedido_Id, id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.status(200).json({ message: 'Estado atualizado com sucesso' });
        }
    );
};

// DELETE - Remover estado
const deleteEstado = (req, res) => {
    const { id } = req.params;
    const db = getConnection(); // Obtém a conexão

    db.query('DELETE FROM Estado WHERE Estado_Id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({ message: 'Estado removido com sucesso' });
    });
};

module.exports = {
    createEstado,
    getEstados,
    updateEstado,
    deleteEstado,
};
