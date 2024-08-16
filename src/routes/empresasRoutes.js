import express, { Router } from 'express';
import EmpresaController from '../controllers/empresaControllers.js';

const empresaRouter = express.Router();

empresaRouter.get('/', EmpresaController.list)
empresaRouter.post('/addEmpresa', EmpresaController.save);
empresaRouter.post('/tipoEmpleo', EmpresaController.tipoEmpleo);
empresaRouter.post('/ofertaTrabajo', EmpresaController.ofertaTrabajo);

export default empresaRouter;