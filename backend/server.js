const http = require('http');

const app = require('./app')
const server = http.createServer(app);


server.listen(3000, '0.0.0.0', console.log('app is running'))


