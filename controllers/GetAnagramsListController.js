const arrangePermutations = require('../utils/arrangePermutations');


const getAnagramsListController = async (req, res)=> {
    const anagramsList = arrangePermutations(req.body.text);

    console.log(anagramsList);

    res.status(200).send({
                "message": "the server responded!!!", /*change the message */
                "data": anagramsList
            });
};




module.exports = getAnagramsListController;