import express, { Router } from  'express';
import PersonaController from '../controllers/personaController.js'; //se importa el controller

const router = express.Router();

router.get('/', PersonaController.list);
router.post('/add', PersonaController.save);
router.get('/delete/:ID_IDENTIDAD', PersonaController.delete);
router.get('/update/:ID_IDENTIDAD', PersonaController.edit);
router.post('/update/:ID_IDENTIDAD', PersonaController.newData);

export default router;