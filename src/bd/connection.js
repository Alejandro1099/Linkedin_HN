import { createConnection } from 'mysql2';

//conexion con AWS
const connection = createConnection({
    host: 'database-proyecto.ceqwzgpptpvl.us-east-1.rds.amazonaws.com',
    //host: 'agencia-empleos.cdvfxxw47zcz.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'admin_123',
    port: 3306,
    //database: 'linkedinhn',
    database: 'agencia-empleos'
});

//conexion local
/*const connection = createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin_2024',
    port: 3306,
    database: 'linkedinhn'
});*/

connection.connect((err) => {
    if (err) {
        console.error('Error conectando a Mysql', err.stack);
        return;
    }
    console.log('Conectado a Mysql');
});

export default connection;