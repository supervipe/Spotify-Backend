const express = require('express');
const router = express.Router();
const controller = require('../Controllers/Playlist.controller.js')

router.get('/', controller.getAll);
router.get('/user/:id', controller.getByUsuarioId);
router.get('/:playId', controller.getById);
router.post('/', controller.post);
router.put('/atualizar/:playN', controller.put);
router.post('/:playN/addM/:musiN', controller.addMusic);
router.delete('/:playN/removeM/:musiN', controller.delete);

module.exports = router;

