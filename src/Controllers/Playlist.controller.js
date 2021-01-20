var db = require('../../DB.js')

exports.getAll = function(req, res) {
    let sql = `SELECT * FROM playlist`
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    })
}

exports.post = function (req, res) {
    const playlist = req.body;
    let sql = `INSERT into playlist(nome,foto,usuario_fk) values("${playlist.nome}","${playlist.foto}",${playlist.usuario_fk})`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send("Playlist criada...");
    })

}

exports.getByUsuarioId = function (req, res) {
    const { id } = req.params;
    let sql = `SELECT * FROM playlist WHERE usuario_fk = ${id}`;
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send(results);
    })
}

exports.getById = function (req, res) {
    const {playId}  = req.params;
    let sql = `SELECT * FROM playlist WHERE id = ${playId}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    })

}

exports.put = function (req, res) {
    const { playN } = req.params;
    const playlist = req.body;

    let sql = `UPDATE playlist SET nome = '${playlist.nome}',foto  = '${playlist.foto}' WHERE id = ${playN}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Playlist atualizada...');
    });
}

exports.addMusic = function (req, res, next) {
    const { playN, musiN } = req.params;
    let sql = `INSERT INTO playlist_musica (playlist_fk,musica_fk) values(${playN},${musiN})`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.send('Musica adicionada na playlist...');
    });
}

exports.delete = function (req, res, next) {
    const { playN, musiN } = req.params;

    let sql = `DELETE FROM playlist_musica WHERE playlist_fk = ${playN} and  musica_fk = ${musiN}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        res.send('Musica deletada da playlist...');
    });
}
