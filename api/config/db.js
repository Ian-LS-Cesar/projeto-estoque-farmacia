const mysql = require('mysql2');

// Armazenar a conexão para evitar múltiplas conexões
let connection;

function getConnection() {
    if (!connection) {
        connection = mysql.createConnection({
            host: 'localhost',
            user: 'ian-lucas',
            password: 'mrcuymax',
            database: 'Farmacia',
        });

        connection.connect((err) => {
            if (err) {
                console.error('Erro ao conectar ao banco de dados:', err);
                return;
            }
            console.log('Conectado ao banco de dados MySQL!');
        });
    }

    return connection;
}

module.exports = getConnection;  // Exporta a função que retorna a conexão
