const express = require('express');

const algoController = require('../controllers/algoController');

const router = express.Router();

router
  .route('/')
  .post(algoController.getResult)
  .get(algoController.getTest);

module.exports = router;
