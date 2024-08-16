import express, { urlencoded } from  'express';
import path from 'path';
import myConnection from 'express-myconnection';
import { fileURLToPath } from 'url';

//__filename y __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//Importando routes
import PersonaRoutes from './src/routes/persona.js';
import InfoSanitariaRoutes from './src/routes/info_sanitaria_persona.js';
import EmpresaRouters from './src/routes/empresasRoutes.js';

//settings
app.set('views', path.join(__dirname, 'src', 'views')); //views esta dentro de la carpeta src
app.set('view engine', 'ejs');

//midlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Routes
app.use('/', PersonaRoutes);
app.use('/', InfoSanitariaRoutes);
app.use('/empresa', EmpresaRouters)

//static files
app.use(express.static(path.join(__dirname, 'public')));


//envia al inicio del sistema
app.get('/home', (req, res) =>{
    res.render('inicio');
});

app.get("/", (req, res) => {
    res.send("servidor de Linkedin HN escuchando Buen dia");
})

app.listen(3002, () => {
    console.log('Servidor iniciado en el puerto 3000');
});

