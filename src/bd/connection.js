import { createConnection } from 'mysql2';

const connection = createConnection({
    host: 'database-proyecto.ceqwzgpptpvl.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'admin_2024',
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