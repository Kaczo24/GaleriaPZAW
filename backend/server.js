var fs = require('fs');
const https = require('http');
require('dotenv').config()

const port = process.env.PORT
const app = require('./app');

//const privateKey  = fs.readFileSync('./ssl/server.key', 'utf8');
//const certificate = fs.readFileSync('./ssl/server.crt', 'utf8');
//const credentials = {key: privateKey, cert: certificate};

const server = https.createServer(app);

server.listen(port, () => {
    console.log('Server running on port ' + port);
});
