const express = require('express');
const cors = require('cors');

const server = express();
const port = 5000;

server.use(cors());
server.use(express.json());

server.post('/test', (req, res)=> {
    console.log(req.body.text);
    res.status(200);        /*chain the status and send */
    res.send({
        "message": "the server responded!!!"
    });
});

server.listen(port, ()=> console.log(`the server is on ${port}`));



