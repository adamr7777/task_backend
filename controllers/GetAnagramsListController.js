const arrangePermutations = require('../utils/arrangePermutations');


const getAnagramsListController = async (req, res)=> {
    if(!req.body.text) return res.status(400).send();
    
    const anagramsList = arrangePermutations(req.body.text);

    res.status(200).send({
                "message": "the server responded", 
                "data": anagramsList
            });
};




module.exports = getAnagramsListController;