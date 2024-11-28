const getConnection = require('../config/db');

// CREATE - Adicionar um novo equipamento
const createEquipamento = (req, res) => {
    const { NomeEquipamento, Quantidade } = req.body;
    const db = getConnection(); // Obtém a conexão

    db.query(
        'INSERT INTO Equipamentos (NomeEquipamento, Quantidade) VALUES (?, ?)',
        [NomeEquipamento, Quantidade],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.status(201).json({ message: 'Equipamento adicionado com sucesso' });
        }
    );
};

// READ - Listar todos os equipamentos
const getEquipamentos = (req, res) => {
    const db = getConnection(); // Obtém a conexão

    db.query('SELECT * FROM Equipamentos', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json(results);
    });
};

// UPDATE - Atualizar dados de um equipamento
const updateEquipamento = (req, res) => {
    const { id } = req.params;
    const { NomeEquipamento, Quantidade } = req.body;
    const db = getConnection(); // Obtém a conexão

    db.query(
        'UPDATE Equipamentos SET NomeEquipamento = ?, Quantidade = ? WHERE Equipamento_Id = ?',
        [NomeEquipamento, Quantidade, id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Equipamento não encontrado' });
            }
            res.status(200).json({ message: 'Equipamento atualizado com sucesso' });
        }
    );
};

// DELETE - Remover um equipamento
const deleteEquipamento = (req, res) => {
    const { id } = req.params;
    const db = getConnection(); // Obtém a conexão

    db.query('DELETE FROM Equipamentos WHERE Equipamento_Id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Equipamento não encontrado' });
        }
        res.status(200).json({ message: 'Equipamento removido com sucesso' });
    });
};

module.exports = {
    createEquipamento,
    getEquipamentos,
    updateEquipamento,
    deleteEquipamento,
};
