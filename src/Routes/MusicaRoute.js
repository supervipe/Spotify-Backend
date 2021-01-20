const express = require('express');
const router = express.Router();
const controller = require('../Controllers/Musica.controller.js')

router.get('/', controller.getAll);
router.get('/nome/:nome', controller.getByName);
router.get('/artista/:artist', controller.getByArtist);
router.get('/playlist/:playN', controller.getByPlaylist);



module.exports = router;