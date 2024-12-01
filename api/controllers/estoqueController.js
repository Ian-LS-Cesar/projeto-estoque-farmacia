const getConnection = require('../config/db');

// CREATE - Adicionar um novo item ao estoque
const createEstoque = (req, res) => {
    const { Medicamento_Id, Equipamento_Id, Quantidade } = req.body;
    const db = getConnection();

    if (!Quantidade || (Medicamento_Id === undefined && Equipamento_Id === undefined)) {
        return res.status(400).json({
            error: 'Quantidade e pelo menos um dos campos (Medicamento_Id ou Equipamento_Id) são obrigatórios.',
        });
    }

    db.query(
        'INSERT INTO Estoque (Medicamento_Id, Equipamento_Id, Quantidade) VALUES (?, ?, ?)',
        [Medicamento_Id, Equipamento_Id, Quantidade],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Erro ao adicionar item ao estoque.' });
            }
            res.status(201).json({ message: 'Item adicionado ao estoque com sucesso.' });
        }
    );
};

// READ - Listar todos os itens no estoque
const getEstoque = (req, res) => {
    const db = getConnection();
    db.query('SELECT * FROM Estoque', (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro ao buscar itens do estoque.' });
        }
        res.status(200).json(results);
    });
};

// UPDATE - Atualizar quantidade de um item no estoque
const updateEstoque = (req, res) => {
    const { id } = req.params;
    const { Quantidade } = req.body;
    const db = getConnection();
    if (!Quantidade) {
        return res.status(400).json({ error: 'A quantidade é obrigatória.' });
    }

    db.query(
        'UPDATE Estoque SET Quantidade = ? WHERE Estoque_Id = ?',
        [Quantidade, id],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Erro ao atualizar o item do estoque.' });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Item do estoque não encontrado.' });
            }

            res.status(200).json({ message: 'Item do estoque atualizado com sucesso.' });
        }
    );
};

// DELETE - Remover um item do estoque
const deleteEstoque = (req, res) => {
    const { id } = req.params;
     const db = getConnection();
    db.query('DELETE FROM Estoque WHERE Estoque_Id = ?', [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro ao remover item do estoque.' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Item do estoque não encontrado.' });
        }

        res.status(200).json({ message: 'Item do estoque removido com sucesso.' });
    });
};

module.exports = {
    createEstoque,
    getEstoque,
    updateEstoque,
    deleteEstoque,
};