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

//codigo para guardar datos de la persona
PersonaController.save = (req, res) =>{
    const {dni, pNombre, sNombre, pApellido, sApellido, fecha, direccion, correo, genero} = req.body;
    const sql = 'INSERT INTO persona (DNI, Pnombre, Snombre, Papellido, Sapellido, fec_nac, direccion, correo, genero) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(sql, [dni, pNombre, sNombre, pApellido, sApellido, fecha, direccion, correo, genero], (err, result)=>{
        if(err){
            return res.status(500).send('Error al guardar datos');
        }
        res.render('datosProfesionales');//('ruta donde queremos que redireccione')
    });
};


//codigo para guardar datos laborales
PersonaController.dataLaboral = (req, res) =>{
    const {dni, empresa, descripcion, fecInicio, fecFinal} = req.body;
    const sql = 'INSERT INTO exp_laboral (DNI, cargoID, fec_inicio, fec_final, descripcion) VALUES (?, ?, ?, ?, ?)';
    connection.query(sql, [dni, empresa, descripcion, fecInicio, fecFinal], (err, result) =>{
        if(err){
            return res.status(500).send('Error al guardar datos');
        }
        res.render('');//agregar la ruta donde ira despues de guardar
    });
};

//codigo para guardar la informacion profesional
PersonaController.dataProfesional = (req, res) =>{
    const {dni, conocimientos, idiomas} = req.body;
    const sql = 'INSERT INTO info_profesional (DNI, conocimiento_laboral, idiomas) VALUES (?, ?, ?)';
    connection.query(sql, [dni, conocimientos, idiomas], (err, result) =>{
        if(err){
            return res.status(500).send('Error al guardar datos');
        }
        res.render('datosAcademicos');//agregar la ruta donde ira despues de guardar
    });
};


//codigo para guardar informacion academica
PersonaController.dataAcademica = (req, res) =>{
    const {dni, nivelAcademico, carrera} = req.body;
    const sql = 'INSERT INTO datos_academicos (DNI, nivel_academico, carrera) VALUES (?, ?, ?)';
    connection.query(sql, [dni, nivelAcademico, carrera], (err, result) =>{
        if(err){
            return res.status(500).send('Error al guardar los datos');
        }
        res.render('datosCondicionEmpleo');//agregar a donde ira despues de guardar
    });
};


//codigo para guardar la informacion de condicion laboral
PersonaController.dataCondicion = (req, res) =>{
    const {dni, tipo_contrato, salario} = req.body;
    const sql = 'INSERT INTO condiciones_empleo (DNI, tipo_contrato, salario) VALUES (?, ?, ?)';
    connection.query(sql, [dni, tipo_contrato, salario], (err, result) =>{
        if(err){
            return res.status(500).send('Error al guardar los datos');
        }
        res.render('datosLegales');//agregar la ruta donde ira despues de guardar
    });
};


//codigo para guardar los datos legales
PersonaController.dataLegal = (req, res) =>{
    const {dni, servicioMilitar, antecedentes} = req.body;
    const sql = 'INSERT INTO info_legal (DNI, servicio_militar, aPenales) VALUES (?, ?, ?)';
    connection.query(sql, [dni, servicioMilitar, antecedentes], (err, result) =>{
        if(err){
            return res.status(500).send('Error al guardar los datos');
        }
        res.render('datosFamilia');//agregar la ruta donde ira despues de guardar
    });
};

//Datos de familia
PersonaController.Datafam = (req, res) => {
    const { dni, parentesco } = req.body;

    // Consulta para verificar si el DNI existe en la tabla `persona`
    const checkDNI = 'SELECT * FROM persona WHERE DNI = ?';
    connection.query(checkDNI, [dni], (err, results) => {
        if (err) {
            return res.status(500).send('Error al consultar la base de datos');
        }

        if (results.length === 0) {
            // Si no hay un registro, redirigir a otra página
            return res.render('hola');  // Aquí se coloca la ruta de la nueva página
        } else {
            // Si el DNI existe, proceder a insertar en la tabla `familiares`
            const sql = 'INSERT INTO familiares (DNI, parentesco) VALUES (?, ?)';
            connection.query(sql, [dni, parentesco], (err, result) => {
                if (err) {
                    return res.status(500).send('Error al guardar datos');
                }
                // Redirigir o renderizar una vista después de guardar
                res.render('hola');  // Cambia 'hola' por la vista o ruta deseada
            });
        }
    });
};


//sanitaria
PersonaController.DataSalud = (req, res) =>{
    const {dni, peso, altura, tipoSangre, alergias, eCronicas, medicamentos} = req.body;
    const sql = 'INSERT INTO informacion_sanitaria (DNI, peso, altura, tipo_sangre, alergias, enfermedades_cronicas, medicamentos) VALUES (?, ?, ?, ?, ?, ?, ?)'; //INSERT INTO TABLA (CAMPO DE LA TABLA) VALUES (?, ? TANTOS CAMPOS COMO LA TABLA CONTENGA)
    connection.query(sql, [dni, peso, altura, tipoSangre, alergias, eCronicas, medicamentos], (err, result)=>{
        if(err){
            return res.status(500).send('Error al guardar los datos');
        }
        res.render('inicio');
    });
};

//codigo para eliminar datos
PersonaController.delete = (req, res) => {
    const { ID_IDENTIDAD } = req.params;
    const sql = 'DELETE FROM persona WHERE DNI = ?';
    
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
    const sql = 'SELECT * FROM persona WHERE DNI = ?';

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

    const sql = `UPDATE persona SET ${fields} WHERE DNI = ?`;

    connection.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error al actualizar los datos:', err);
            return res.status(500).send('Error al actualizar los datos');
        }
        res.redirect('/');
    });
};


export default PersonaController; //se exporta el objeto creado anteriormente 