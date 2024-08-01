import express from  'express';
import PersonaController from '../controllers/personaController.js'; //se importa el controller

const router = express.Router();

router.get('/', PersonaController.list);
router.post('/add', PersonaController.save);

export default router;