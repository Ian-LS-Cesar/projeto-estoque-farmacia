const getConnection = require('../config/db');

// CREATE - Adicionar um novo remédio
const createRemedio = (req, res) => {
    const { NomeMedicamento, Dosagem, Unidade } = req.body;
    const db = getConnection();  // Chama a função para obter a conexão

    db.query('INSERT INTO Medicamentos (NomeMedicamento, Dosagem, Unidade) VALUES (?, ?, ?)', 
    [NomeMedicamento, Dosagem, Unidade], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ message: 'Remédio adicionado com sucesso' });
    });
};

// READ - Listar todos os remédios
const getRemedio = (req, res) => {
    const db = getConnection();  // Chama a função para obter a conexão
    db.query('SELECT * FROM Medicamentos', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json(results);
    });
};

// UPDATE - Atualizar dados de um remédio
const updateRemedio = (req, res) => {
    const { id } = req.params;
    const { NomeMedicamento, Dosagem, Unidade } = req.body;
    const db = getConnection();  // Chama a função para obter a conexão

    db.query('UPDATE Medicamentos SET NomeMedicamento = ?, Dosagem = ?, Unidade = ? WHERE Medicamento_Id = ?', 
    [NomeMedicamento, Dosagem, Unidade, id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({ message: 'Remédio atualizado com sucesso' });
    });
};

// DELETE - Remover um remédio
const deleteRemedio = (req, res) => {
    const { id } = req.params;
    const db = getConnection();  // Chama a função para obter a conexão

    db.query('DELETE FROM Medicamentos WHERE Medicamento_Id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({ message: 'Remédio removido com sucesso' });
    });
};

module.exports = {
    createRemedio,
    getRemedio,
    updateRemedio,
    deleteRemedio
};
