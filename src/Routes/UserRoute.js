const express = require('express');
const router = express.Router();
const controller = require('../Controllers/Usuario.controller.js')

router.get('/:email/:senha', controller.getUser);
router.get('/', controller.getAll);
router.post('/', controller.post);
router.put('/:id', controller.put);

module.exports = router;