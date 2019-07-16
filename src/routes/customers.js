'use strict'

const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController.js');

router.get('/', customerController.list);
router.post('/add', customerController.save);
router.get('/delete/:id', customerController.delete);

module.exports = router;
