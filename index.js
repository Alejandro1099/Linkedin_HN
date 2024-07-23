import express from  'express';

const app = express();

app.get("/", (req, res) => {
    res.send("servidor de Linkedin HN escuchando");
})

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});

