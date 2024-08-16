import express, { Router } from 'express';
import infoSanitariaController from '../controllers/infoSanitariaController.js';

const info_sanitaria_routers = express.Router();

info_sanitaria_routers.post('/', infoSanitariaController.save);

info_sanitaria_routers.get('/personas', (req, res)=>{
    res.render('persona');
})

export default info_sanitaria_routers;