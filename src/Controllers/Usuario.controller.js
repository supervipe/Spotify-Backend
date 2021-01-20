var db = require('../../DB.js')

exports.getUser = function (req, res){

  const { email,senha } = req.params

  let sql = `SELECT * FROM usuario WHERE usuario.email = "${email}" AND usuario.senha = "${senha}"`;
  let query = db.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send(result);
  });
  }

exports.getAll = function(req,res){
  let sql = 'SELECT * FROM usuario';
  let query = db.query(sql, (err, results) => {
      if(err) throw err;
      console.log(results);
      res.send(results);
  });

  }

exports.post = function(req,res){
  const  usuario  = req.body

  let post = {title:'Post Usuario', body:'Criando usuario novo'};
  let sql = `insert into usuario(nome,email,senha,nascimento,gender)
   values("${usuario.nome}","${usuario.email}","${usuario.senha}","${usuario.nascimento}","${usuario.gender}");`;
  let query = db.query(sql, post, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send(result)
  });
  
  }
    
exports.put = function(req,res){
  const { id } = req.params 
  const  usuario  = req.body 
  
  let sql = `UPDATE usuario SET nome = "${usuario.nome}",email = "${usuario.email}",
  senha = "${usuario.senha}", nascimento = "${usuario.nascimento}", gender = "${usuario.gender}" 
  WHERE id = ${id}`;
  let query = db.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send(result);
  });  
 }