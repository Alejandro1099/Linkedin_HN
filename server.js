import http from 'http';

const server = http.createServer((req, res) => {
    res.end('Funciona con el modulo http')
});

server.listen(3000);
console.log('Server on port 3000');