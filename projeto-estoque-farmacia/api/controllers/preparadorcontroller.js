const getConnection = require('../config/db');

// CREATE - Adicionar um novo preparador
const createPreparador = (req, res) => {
    const { Nome_Preparador, Telefone, Email, DataPreparo } = req.body;
    const db = getConnection();  // Estabelece a conexão com o banco de dados

    db.query(
        'INSERT INTO Preparador (Nome_Preparador, Telefone, Email, DataPreparo) VALUES (?, ?, ?, ?)',
        [Nome_Preparador, Telefone, Email, DataPreparo],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.status(201).json({ message: 'Preparador adicionado com sucesso' });
        }
    );
};

// READ - Listar todos os preparadores
const getPreparadores = (req, res) => {
    const db = getConnection();  // Estabelece a conexão com o banco de dados

    db.query('SELECT * FROM Preparador', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json(results);
    });
};

// UPDATE - Atualizar um preparador
const updatePreparador = (req, res) => {
    const { id } = req.params;
    const { Nome_Preparador, Telefone, Email, DataPreparo } = req.body;
    const db = getConnection();  // Estabelece a conexão com o banco de dados

    db.query(
        'UPDATE Preparador SET Nome_Preparador = ?, Telefone = ?, Email = ?, DataPreparo = ? WHERE Preparador_Id = ?',
        [Nome_Preparador, Telefone, Email, DataPreparo, id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.status(200).json({ message: 'Preparador atualizado com sucesso' });
        }
    );
};

// DELETE - Remover um preparador
const deletePreparador = (req, res) => {
    const { id } = req.params;
    const db = getConnection();  // Estabelece a conexão com o banco de dados

    db.query('DELETE FROM Preparador WHERE Preparador_Id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({ message: 'Preparador removido com sucesso' });
    });
};

module.exports = {
    createPreparador,
    getPreparadores,
    updatePreparador,
    deletePreparador,
};
