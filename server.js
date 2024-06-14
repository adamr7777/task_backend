const express = require('express');
const cors = require('cors');

const getAnagramsListRouter = require('./routes/getAnagramsListRoute');

const server = express();
const port = 5000;

server.use(cors());
server.use(express.json());

server.use('/getAnagramsList', getAnagramsListRouter);



server.listen(port, ()=> console.log(`the server is on ${port}`));

















