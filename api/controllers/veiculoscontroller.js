const getConnection = require('../config/db'); // Importando a função para obter a conexão

// CREATE - Adicionar novo veículo
const createVeiculo = (req, res) => {
    const { NomeVeiculo, NumeroVeiculo } = req.body;
    const db = getConnection();  // Estabelece a conexão com o banco de dados

    db.query(
        'INSERT INTO Veiculos (NomeVeiculo, NumeroVeiculo) VALUES (?, ?)',
        [NomeVeiculo, NumeroVeiculo],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.status(201).json({ message: 'Veículo adicionado com sucesso' });
        }
    );
};

// READ - Listar todos os veículos
const getVeiculos = (req, res) => {
    const db = getConnection();  // Estabelece a conexão com o banco de dados

    db.query('SELECT * FROM Veiculos', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json(results);
    });
};

// UPDATE - Atualizar veículo
const updateVeiculo = (req, res) => {
    const { id } = req.params;
    const { NomeVeiculo, NumeroVeiculo } = req.body;
    const db = getConnection();  // Estabelece a conexão com o banco de dados

    db.query(
        'UPDATE Veiculos SET NomeVeiculo = ?, NumeroVeiculo = ? WHERE Veiculo_Id = ?',
        [NomeVeiculo, NumeroVeiculo, id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.status(200).json({ message: 'Veículo atualizado com sucesso' });
        }
    );
};

// DELETE - Remover veículo
const deleteVeiculo = (req, res) => {
    const { id } = req.params;
    const db = getConnection();  // Estabelece a conexão com o banco de dados

    db.query('DELETE FROM Veiculos WHERE Veiculo_Id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({ message: 'Veículo removido com sucesso' });
    });
};

module.exports = {
    createVeiculo,
    getVeiculos,
    updateVeiculo,
    deleteVeiculo,
};
