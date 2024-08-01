import connection from '../bd/connection.js';

const PersonaController = {}; //Objeto persona

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

export default PersonaController; //se exporta el objeto creado anteriormente 