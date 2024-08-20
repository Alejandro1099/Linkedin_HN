import express, { Router } from  'express';
import PersonaController from '../controllers/personaController.js'; //se importa el controller

const router = express.Router();

//router de personas
router.get('/', PersonaController.list);
router.post('/add', PersonaController.save);
router.get('/delete/:ID_IDENTIDAD', PersonaController.delete);
router.get('/update/:ID_IDENTIDAD', PersonaController.edit);
router.post('/update/:ID_IDENTIDAD', PersonaController.newData);

//informacion sanitaria
router.get('/addInfoSantiraria', (req, res)=>{
    res.render('hola');
})

router.post('/addSalud', PersonaController.DataSalud);
router.post('/dataProfesional', PersonaController.dataProfesional);
router.post('/dataAcademica', PersonaController.dataAcademica);
router.post('/condicionEmpleo', PersonaController.dataCondicion)
router.post('/dataLegal', PersonaController.dataLegal);
router.post('/dataFamilia', PersonaController.Datafam);


export default router;