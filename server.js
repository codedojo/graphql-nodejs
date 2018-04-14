const express = require('express');

const api = require('./api');

const server = express();

server.use('/api', api);

server.listen(3000, () => console.log('Express is listening on port 3000'));