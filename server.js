
const express = require('express');
const cors = require('cors');
const server = express();
const port = 5000;

server.use(cors());

server.get('/test', (req, res)=> {
    console.log('Click Me!!')
    res.status('200');
    res.send({
        "message": "the server responded!!!"
    });
});

server.listen(port, ()=> console.log(`the server is on ${port}`));



