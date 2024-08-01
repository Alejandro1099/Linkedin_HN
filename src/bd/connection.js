import { createConnection } from 'mysql2';

const connection = createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'reclutamiento'
});

connection.connect((err) => {
    if (err) {
        console.error('Error conectando a Mysql', err.stack);
        return;
    }
    console.log('Conectado a Mysql');
});

export default connection;