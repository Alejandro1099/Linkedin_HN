import connection from '../bd/connection.js';

const PersonaController = {}; //Objeto persona

//codigo para listar datos
PersonaController.list = (req, res) =>{
    const sql = 'SELECT * FROM persona';
    connection.query(sql, (err, personas) => {
        if(err){
            return res.status(500).json(err);
        }
        res.render('persona', {
            data: personas
        });
    });
};

//codigo para guardar datos
PersonaController.save = (req, res) =>{
    const {pNombre, sNombre} = req.body;
    const sql = 'INSERT INTO persona (nombre1, nombre2) VALUES (?, ?)';
    connection.query(sql, [pNombre, sNombre], (err, result)=>{
        if(err){
            return res.status(500).send('Error al guardar datos');
        }
        res.redirect('/');//('ruta donde queremos que redireccione')
    })
};

//codigo para eliminar datos
PersonaController.delete = (req, res) => {
    const { ID_IDENTIDAD } = req.params;
    const sql = 'DELETE FROM persona WHERE ID_IDENTIDAD = ?';
    
    connection.query(sql, [ID_IDENTIDAD], (err, result) => { //esta funcion necesita dos parametros la consulta y el valor que cambiara en los placeholders (?)
        if (err) {
            console.error('Error al eliminar datos:', err);
            return res.status(500).send('Error al eliminar datos');
        }
        res.redirect('/');
    });
};


//codigo para actualizar datos
PersonaController.edit = (req, res) => {
    const { ID_IDENTIDAD } = req.params;
    const sql = 'SELECT * FROM persona WHERE ID_IDENTIDAD = ?';

    connection.query(sql, [ID_IDENTIDAD], (err, result) =>{
        if (err) {
            console.error('Error al traer informacion:', err);
            return res.status(500).send('Error no se encontro la informacion');
        }
        res.render('persona_edit', {
            data: result[0]
        });
    });
};

PersonaController.newData = (req, res) => {
    const { ID_IDENTIDAD } = req.params;
    const newPersona = req.body;

    // Construir la consulta SQL dinámicamente
    const fields = Object.keys(newPersona).map(key => `${key} = ?`).join(', ');
    const values = Object.values(newPersona);
    values.push(ID_IDENTIDAD); // Añadir el ID al final de los valores

    const sql = `UPDATE persona SET ${fields} WHERE ID_IDENTIDAD = ?`;

    connection.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error al actualizar los datos:', err);
            return res.status(500).send('Error al actualizar los datos');
        }
        res.redirect('/');
    });
};


export default PersonaController; //se exporta el objeto creado anteriormente 