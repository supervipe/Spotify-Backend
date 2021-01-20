var db = require('../../DB.js')

exports.getAll = function(req, res) {
    let sql = `SELECT * FROM musica`;
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send(results);
    }); 
}

exports.getByName = function(req, res) {
    const {nome} = req.params
    let sql = `SELECT * FROM musica WHERE nome like "%${nome}%"`;
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send(results);
    });
}

exports.getByArtist = function (req, res){
    const {artist} = req.params
    let sql = `SELECT * FROM musica WHERE cantor like "%${artist}%"`;
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send(results);
    });
}

exports.getByPlaylist = function (req, res){
    const {playN} = req.params;
    let sql = `select musica.* from musica join playlist_musica on musica_fk = musica.id where playlist_fk = ${playN}`;
    let query = db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    })
}
