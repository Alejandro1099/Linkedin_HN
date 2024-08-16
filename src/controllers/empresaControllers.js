import connection from '../bd/connection.js';

const EmpresaController = {}; //objeto empresa

//codigo para guardar datos de la empresa
EmpresaController.save = (req, res) =>{
    const {cif, nEmpresa, nDirector, tel, direccion, correo, img} = req.body;
    const sql = 'INSERT INTO empresa (CIF, nombre_empresa, nombre_ceo, telefono, direccion, correo, logo) VALUES (?, ?, ?, ?, ?, ?, ?)';
    connection.query(sql, [cif, nEmpresa, nDirector, direccion, tel, correo, img], (err, result)=>{
        if(err){
            return res.status(500).send('Error al guardar datos');
        }
        res.render('inicio');//cambiar por vista tipo_empleo
    });
};

//codigo para listar las empresas
EmpresaController.list = (req, res) =>{
    const sql = 'SELECT * FROM empresas';
    connection.query(sql, (err, empresas) => {
        if(err){
            return res.status(500).json(err);
        }
        res.render('empresa', {//crear vista
            data: empresas
        })
    });
;}


//codigo para tipo_empleo
EmpresaController.tipoEmpleo = (req, res) => {
    const {cargoID, descripcion} = req.body;
    const sql = 'INSERT INTO tipo_empleo (cargoID, descripcion) VALUES (?, ?)';
    connection.query(sql, [cargoID, descripcion], (err, result)=>{
        if(err){
            return res.status(500).send('Error al guardar datos');
        }
        res.render('');//agrear donde ira despues de guardar
    });
};

//codigo para oferta_trabajo
EmpresaController.ofertaTrabajo = (req, res) => {
    const {empresaID, tipo_empleoID, deptoID, descripcion, req_academico, req_legales, sueldo, vacantes} = req.body;
    const sql = 'INSERT INTO tipo_empleo (empresaID, tipo_empleoID, deptoID, descripcion, req_academico, req_legales, sueldo, vacantes) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(sql, [empresaID, tipo_empleoID, deptoID, descripcion, req_academico, req_legales, sueldo, vacantes], (err, result)=>{
        if(err){
            return res.status(500).send('Error al guardar datos');
        }
        res.render('inicio');
    });
};

export default EmpresaController;