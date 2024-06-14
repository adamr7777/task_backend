const express = require('express');

const getAnagramsListController = require('../controllers/GetAnagramsListController');

const router = express.Router();


router.route('/').post(getAnagramsListController);


module.exports = router;