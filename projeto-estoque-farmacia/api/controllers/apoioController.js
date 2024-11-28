const getConnection = require('../config/db');

// CREATE - Adicionar novo apoio
const createApoio = (req, res) => {
    const { NomeApoio, Veiculo_Id } = req.body;
    const db = getConnection(); // Obtém a conexão

    db.query(
        'INSERT INTO Apoio (NomeApoio, Veiculo_Id) VALUES (?, ?)',
        [NomeApoio, Veiculo_Id],
        (err, result) => {
            if (err) {
                console.error(err); // Log do erro para debug
                return res.status(500).json({ error: err });
            }
            res.status(201).json({ message: 'Apoio adicionado com sucesso' });
        }
    );
};

// READ - Listar todos os apoios
const getApoios = (req, res) => {
    const db = getConnection(); // Obtém a conexão

    db.query('SELECT * FROM Apoio', (err, results) => {
        if (err) {
            console.error(err); // Log do erro para debug
            return res.status(500).json({ error: err });
        }
        res.status(200).json(results);
    });
};

// UPDATE - Atualizar apoio
const updateApoio = (req, res) => {
    const { id } = req.params;
    const { NomeApoio, Veiculo_Id } = req.body;
    const db = getConnection(); // Obtém a conexão

    db.query(
        'UPDATE Apoio SET NomeApoio = ?, Veiculo_Id = ? WHERE Apoio_Id = ?',
        [NomeApoio, Veiculo_Id, id],
        (err, result) => {
            if (err) {
                console.error(err); // Log do erro para debug
                return res.status(500).json({ error: err });
            }
            res.status(200).json({ message: 'Apoio atualizado com sucesso' });
        }
    );
};

// DELETE - Remover apoio
const deleteApoio = (req, res) => {
    const { id } = req.params;
    const db = getConnection(); // Obtém a conexão

    db.query('DELETE FROM Apoio WHERE Apoio_Id = ?', [id], (err, result) => {
        if (err) {
            console.error(err); // Log do erro para debug
            return res.status(500).json({ error: err });
        }
        res.status(200).json({ message: 'Apoio removido com sucesso' });
    });
};

module.exports = {
    createApoio,
    getApoios,
    updateApoio,
    deleteApoio,
};
