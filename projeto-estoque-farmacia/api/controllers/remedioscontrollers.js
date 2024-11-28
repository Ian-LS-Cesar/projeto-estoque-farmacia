const getConnection = require('../config/db');

// CREATE - Adicionar um novo remédio
const createRemedio = (req, res) => {
    const { NomeRemedio, Dosagem, Unidade } = req.body;
    const db = getConnection();  // Chama a função para obter a conexão

    db.query('INSERT INTO Remedios (NomeRemedio, Dosagem, Unidade) VALUES (?, ?, ?)', 
    [NomeRemedio, Dosagem, Unidade], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ message: 'Remédio adicionado com sucesso' });
    });
};

// READ - Listar todos os remédios
const getRemedios = (req, res) => {
    const db = getConnection();  // Chama a função para obter a conexão
    db.query('SELECT * FROM Remedios', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json(results);
    });
};

// UPDATE - Atualizar dados de um remédio
const updateRemedio = (req, res) => {
    const { id } = req.params;
    const { NomeRemedio, Dosagem, Unidade } = req.body;
    const db = getConnection();  // Chama a função para obter a conexão

    db.query('UPDATE Remedios SET NomeRemedio = ?, Dosagem = ?, Unidade = ? WHERE Remedio_Id = ?', 
    [NomeRemedio, Dosagem, Unidade, id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({ message: 'Remédio atualizado com sucesso' });
    });
};

// DELETE - Remover um remédio
const deleteRemedio = (req, res) => {
    const { id } = req.params;
    const db = getConnection();  // Chama a função para obter a conexão

    db.query('DELETE FROM Remedios WHERE Remedio_Id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({ message: 'Remédio removido com sucesso' });
    });
};

module.exports = {
    createRemedio,
    getRemedios,
    updateRemedio,
    deleteRemedio
};
