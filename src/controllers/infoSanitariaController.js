import connection from '../bd/connection.js';

const infoSanitariaController = {}; //objeto correspondiente a la info sanitaria de la persona


//informacion sanitaria (PK INFO_SANITARIAID, PERSONADNI, PESO, ALTURA, TIPO_SANGRE, ALERGIAS, ENFERMEDADES_CRONICAS, MEDICAMENTOS)

//codigo para guardar los datos sanitarios de una persona
infoSanitariaController.save = (req, res) =>{
    const {dni, peso, altura, tipoSangre, alergias, eCronicas, medicamentos} = req.body;
    const sql = 'INSERT INTO informacion_sanitaria (DNI_PERSONA, PESO, ALTURA, TIPO_SANGRE, ALERGIAS, ENFERMEDADES_CRONICAS, MEDICAMENTOS) VALUES (?, ?, ?, ?, ?, ?, ?)'; //INSERT INTO TABLA (CAMPO DE LA TABLA) VALUES (?, ? TANTOS CAMPOS COMO LA TABLA CONTENGA)
    connection.query(sql, [dni, peso, altura, tipoSangre, alergias, eCronicas, medicamentos], (err, result)=>{
        if(err){
            return res.status(500).send('Error al guardar los datos');
        }
        res.redirect('/');
    });
};

export default infoSanitariaController;